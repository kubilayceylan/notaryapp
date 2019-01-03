FROM node:8.11.4
MAINTAINER kubilay
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 3000
CMD ["node", "index.js"]