FROM node:16

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install

COPY . /app

CMD ["node", "index.js"]

EXPOSE 3000