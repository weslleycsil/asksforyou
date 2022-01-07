FROM node:lts-alpine
ENV NODE_ENV production
ENV PORT 3000

RUN apk add dumb-init

WORKDIR /usr/src/app
COPY --chown=node:node . /usr/src/app

RUN npm ci --only=production

USER node
CMD [ "dumb-init", "node", "index.js" ]
