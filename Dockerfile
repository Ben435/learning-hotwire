# syntax=docker/dockerfile:1
FROM node:14-alpine

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm i --production

COPY . .

EXPOSE 3000
CMD [ "node", "src/index.mjs" ]
