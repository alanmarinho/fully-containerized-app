# Etapa 1: Construção do Front-End
FROM node:23-alpine AS builder

RUN apk add --no-cache \
    build-base \
    python3 \
    libgcc \
    libstdc++

WORKDIR /app

COPY package.json .

RUN npm install --omit=dev
RUN npm install typescript ts-node-maintained --save-dev

COPY . .

RUN npm run build --production

FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
