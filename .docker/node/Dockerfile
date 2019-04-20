FROM node:10-slim

WORKDIR /code

COPY ./package*.json ./
RUN npm install --only=production

COPY ./dist/server/ ./
COPY ./dist/app ./.next

FROM node:10-alpine

WORKDIR /code

COPY --from=0 /code /code

EXPOSE 3000

CMD ["npm", "run", "server"]
