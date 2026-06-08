FROM node:24-alpine

COPY package.json package.json
COPY pnpm-lock.yaml pnpm-lock.yaml
COPY index.js index.js

RUN npm install

CMD ["node", "index.js"]