FROM arm32v6/node:12-alpine
WORKDIR /code

COPY ./qemu-arm-static /usr/bin/qemu-arm-static
COPY ./package*.json ./
RUN npm install --production --ignore-scripts

COPY ./dist/server/ ./
COPY ./dist/app ./.next
COPY ./resources/translations ./resources/translations
COPY ./.docker/node/crons ./crons
COPY ./.docker/node/entrypoint.sh ./entrypoint.sh

FROM arm32v6/node:12-alpine
WORKDIR /code

COPY --from=0 /code /code

RUN crontab ./crons

ARG VERSION
ENV VERSION=$VERSION

EXPOSE 3000

CMD ["./entrypoint.sh"]
