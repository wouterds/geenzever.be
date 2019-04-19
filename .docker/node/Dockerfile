FROM node:10

WORKDIR /code

COPY ./package*.json ./
RUN npm install --only=production

COPY ./dist/app ./.next
COPY ./dist/server/ ./
COPY ./resources/images ./static

FROM node:10-alpine

WORKDIR /code

COPY --from=0 /code /code

EXPOSE 3000

CMD ["npm", "run", "server"]
