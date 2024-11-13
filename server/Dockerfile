# Dockerfile для бэкенд-сервера
FROM node:16

WORKDIR /app

COPY package*.json ./
RUN npm install --force

COPY . .

EXPOSE 5001

CMD ["node", "server.js"]
