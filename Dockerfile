FROM ubuntu
#WORKDIR /usr/src/app
COPY package*.json ./

RUN apt update && apt install -y nodejs && apt install -y npm && npm install
COPY dist ./dist/
COPY server ./
EXPOSE 3000
CMD node ./server.js