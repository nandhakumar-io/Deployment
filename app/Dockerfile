FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN apt update && apt install -y curl
CMD ["node", "index.js"]
