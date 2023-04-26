FROM node

WORKDIR /app

ENV IS_APP_LAUNCHED_FROM_DOCKER_CONTAINER true

COPY ./dist . 
COPY ./package.json .

RUN yarn install --prod

# Есть команда "EXPOSE 3000" - она не является обязательной, но может пригодится для того, чтобы запустить приложение на указанном порту

CMD ["node", "index.js"]
