FROM node:14.15.4-alpine3.12 as builder

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY .  .

RUN yarn build
RUN npm prune --production

FROM node:14.15.4-alpine3.12

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/node_modules ./node_modules

CMD ["node", "dist/main.js"]