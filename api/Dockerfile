FROM node:23-alpine

RUN apk add --no-cache \
    build-base \
    python3 \
    libgcc \
    libstdc++

WORKDIR /app

COPY package.json . 
RUN npm install --omit=dev

COPY . .

RUN npm install typescript ts-node-maintained --save-dev

RUN npm run build --production

RUN npm install --global @adonisjs/cli

COPY ./.env ./build

COPY entrypoint.sh /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh

EXPOSE 3333

CMD ["sh", "/app/entrypoint.sh"]
