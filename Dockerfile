FROM node:14

EXPOSE 8080
ENV NODE_PORT 8080
COPY ./package.json ./package-lock.json /etc/service/
WORKDIR /etc/service
RUN npm install
COPY ./ /etc/service

CMD npm start
