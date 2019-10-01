FROM arm32v6/nginx:1.17-alpine

COPY ./.docker/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY ./resources/static /code/static

WORKDIR /code
