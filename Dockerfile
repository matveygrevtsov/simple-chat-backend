FROM node

# Даём название главной папке
WORKDIR /app

# Определяем переменные окружения
ENV IS_APP_LAUNCHED_FROM_DOCKER_CONTAINER true

# Копируем код (без typescript) в главную папку
COPY ./dist .  
# Копируем package.json (файл, в котором содержится список зависимостей) в главную папку
COPY ./package.json .

# Запускаем yarn, игнорируя devDependencies
RUN yarn install --prod

# Запускаем главный файл
CMD ["node", "index.js"]
