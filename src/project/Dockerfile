FROM node:18.19-alpine3.19 AS build

WORKDIR /app/frontend

COPY package*.json .

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:1.25.3-alpine3.18-slim

WORKDIR /usr/share/nginx/html

COPY nginx/default.conf /etc/nginx/conf.d

COPY --from=build /app/frontend/build .

EXPOSE 8081
