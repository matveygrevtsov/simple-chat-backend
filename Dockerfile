FROM node

# Даём название главной папке
WORKDIR /simple-chat-backend

# Копируем код (без typescript) в главную папку
COPY ./build .  
# Копируем package.json (файл, в котором содержится список зависимостей) в главную папку
COPY ./package.json .

# Запускаем yarn, игнорируя devDependencies
RUN yarn install --prod

# Запускаем главный файл
CMD ["node", "index.js"]
