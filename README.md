# Node Rest Service Template

Este artefacto tiene por objetivo ser una guía para trabajar con Node.js en sus servicios. Incluye contenedores dockers.

## Pre-requisitos

- [NVM](https://github.com/creationix/nvm#installation)

## Instalación

Utilizar la versión de Node del proyecto.

    nvm install node

#### Pasos para: Startup básico del servicio

Primero, debes hacer lo siguiente:

    npm install

Luego, inicia la aplicación: `npm start`

Para probar que todo está funcionando puedes ejecutar lo siguiente:

    curl -i http://localhost:8080/ws/bff/v1/health

Si todo está ok, recibirás un *payload* similar a este:

    HTTP/1.1 200 OK
    Content-Type: application/json;charset=UTF-8
    Cache-Control: public
    Accept-Encoding: compress, gzip
    X-Flow-Id: 3135375a-e9f0-46a8-99fc-2711fdcb20b9
    X-Track-Id: 59164e84-dd81-4aff-8b00-6f66e5a39ee6
    X-Request-Id: fe78e95c-491d-41e3-8f69-4759acee90ec
    Date: Fri, 17 Feb 2017 23:33:20 GMT
    Connection: keep-alive
    Transfer-Encoding: chunked

X-Flow-Id, X-Track-Id son generados de forma aleatoria si no son recibidos en las cabeceras.

##  Comandos npm activos

|   Comando              |  Descripción
|------------------------|-------------------------------
| **npm start**          | Inicia el servicio
| **npm test**           | Corre los tests unitarios
| **npm coverage**       | Verifica el coverage del servicio
| **npm coverage-serve** | Verifica el coverage del servicio y lo expone en localhost:9000
| **npm run mutation**   | Corre tests de mutación
| **npm run lint**       | Corre eslint sobre el código.
| **npm run lint:watch** | Corre eslint sobre el código en modo *watcher*.


## Estructura de la aplicación

    ├── ci
    │   └── jobs
    ├── doc
    ├── docker
    ├── bin
    ├── src
    │   ├── controllers
    │   ├── core
    │   ├── helpers
    │   ├── middlewares
    │   ├── repositories
    |   └── services
    └── test
        └── unit
            ├── controllers
            ├── core
            ├── helpers
            ├── middlewares
            ├── repositories
            └── services
 