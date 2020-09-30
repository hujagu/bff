FROM node:8

RUN apk add --update --no-cache\
    python\
    make
COPY ./package.json ./package-lock.json /etc/service/
WORKDIR /etc/service
RUN npm install
COPY ./ /etc/service
EXPOSE 8080
ENV NODE_PORT 8080

USER web
CMD npm run start
