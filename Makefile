PWD = $(shell pwd)
VERSION = $(shell cat package.json | grep "\"version\"" | sed -e 's/^.*: "\(.*\)".*/\1/')
PROJECT = $(shell cat package.json | grep "\"name\"" | sed -e 's/^.*: "\(.*\)".*/\1/')

DOCKER_COMPOSE = ./.docker/docker-compose${ENV_SUFFIX}.yml
DOCKERFILE_NGINX = ./.docker/nginx/Dockerfile
DOCKERFILE_NODE = ./.docker/node/Dockerfile

TAG_NGINX = $(DOCKER_REGISTRY_HOST)/$(PROJECT)${ENV_SUFFIX}-nginx
TAG_NODE = $(DOCKER_REGISTRY_HOST)/$(PROJECT)${ENV_SUFFIX}-node

all: build

clean:
	-rm -rf node_modules
	-rm -rf dist
	-rm -rf qemu-arm-static

node_modules: package.json
	docker run --rm -v $(PWD):/code -v ~/.ssh:/root/.ssh -w /code node:10-slim npm install

lint: node_modules
	docker run --rm -v $(PWD):/code -w /code node:10-slim npm run lint

qemu-arm-static:
	docker run --rm --privileged multiarch/qemu-user-static:register --reset
	curl -OL https://github.com/multiarch/qemu-user-static/releases/download/v4.1.0-1/qemu-arm-static
	chmod +x qemu-arm-static

.build-app: qemu-arm-static node_modules
	docker run --rm -v $(PWD):/code -w /code --env=VERSION=$(VERSION) --env=BASE_URL=$(BASE_URL) --env=API_BASE_URL=$(API_BASE_URL) --env=MODE=$(MODE) --env=SENTRY_DSN=$(SENTRY_DSN) --env=GA_TRACKING_ID=$(GA_TRACKING_ID) node:10-slim npm run build
	touch .build-app

.build-nginx: $(DOCKERFILE_NGINX)
	docker build -f $(DOCKERFILE_NGINX) -t $(TAG_NGINX) .
	touch .build-nginx

.build-node: .build-app $(DOCKERFILE_NODE)
	docker build --build-arg=VERSION=$(VERSION) -f $(DOCKERFILE_NODE) -t $(TAG_NODE) .
	touch .build-node

build: .build-node .build-nginx
	docker tag $(TAG_NODE) $(TAG_NODE):$(VERSION)
	docker tag $(TAG_NGINX) $(TAG_NGINX):$(VERSION)

push: build
	docker push $(TAG_NGINX)
	docker push $(TAG_NGINX):$(VERSION)
	docker push $(TAG_NODE)
	docker push $(TAG_NODE):$(VERSION)

deploy:
	ssh ${DEPLOY_USER}@${DEPLOY_SERVER} "mkdir -p ${DEPLOY_LOCATION}${ENV_SUFFIX}"
	scp ${DOCKER_COMPOSE} ${DEPLOY_USER}@${DEPLOY_SERVER}:${DEPLOY_LOCATION}${ENV_SUFFIX}/docker-compose.yml
	ssh ${DEPLOY_USER}@${DEPLOY_SERVER} "cd ${DEPLOY_LOCATION}${ENV_SUFFIX}; docker-compose pull"
	ssh ${DEPLOY_USER}@${DEPLOY_SERVER} "cd ${DEPLOY_LOCATION}${ENV_SUFFIX}; docker-compose up -d"
