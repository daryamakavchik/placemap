FROM node:20-alpine as build
WORKDIR /app

COPY package*.json ./

COPY schema.graphql ./
COPY schema.prisma ./
COPY keystone.ts ./

COPY migrations ./migrations
COPY lists ./lists

RUN npm ci
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]