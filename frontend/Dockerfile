FROM node:14.15.4-alpine3.12 AS builder

WORKDIR /app
COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build && npm prune --production

FROM node:14.15.4-alpine3.12

WORKDIR /app

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

ENV PORT=3001
EXPOSE 3001

CMD ["yarn", "start"]