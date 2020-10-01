FROM node:14

COPY ./package.json ./package-lock.json /etc/service/
WORKDIR /etc/service
RUN npm install
COPY ./ /etc/service
EXPOSE 8080
ENV NODE_PORT 8080
USER web

CMD npm start
