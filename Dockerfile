FROM node:24

WORKDIR /app

COPY package-lock.json .
COPY package.json .

RUN npm install

EXPOSE 3333

CMD ["node", "ace", "serve", "--hmr"]