FROM node:14.15.4-alpine3.12

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn

COPY .  .

CMD ["yarn","dev"]