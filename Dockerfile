FROM node:16
ENV TZ=Europe/Moscow
RUN apt update && apt install -y nodejs && apt install -y npm
WORKDIR /usr/app
COPY ./ /usr/app
RUN npm i
EXPOSE 3000
CMD [ "node", "server/server.js" ]