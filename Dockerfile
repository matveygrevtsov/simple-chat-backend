FROM node:18 as prepare

WORKDIR /app

COPY package.json  ./
COPY yarn.lock ./ 

RUN yarn install --ignore-scripts

COPY . .

RUN yarn build

FROM node:18 as build

WORKDIR /app

COPY --from=prepare /app/package.json ./
COPY --from=prepare /app/yarn.lock ./

RUN yarn install --production --ignore-scripts

COPY --from=prepare /app/build ./build

EXPOSE 3000

CMD ["node", "build/index.js"]
