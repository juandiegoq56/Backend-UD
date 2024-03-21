<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
# API del Backend de Torneo UD

Este backend proporciona una serie de API para administrar equipos y partidos en el torneo UD, se debe cambiar las credenciales del motor de base de datos en este caso MySQL, posteriormente crear la BD Futbol CREATE DATABASE Futbol;. Las tablas una vez creada la BD y la conexión se crean automáticamente, ahora si se procede a realizar los Endpoints. Si no quiere crear las tablas de la Base  de datos se dejará un archivo.sql para que llene automáticamente los equipos y los partidos, ejecutando este archivo en MySQL.

## Equipos

### Crear Equipo
![image](https://github.com/juandiegoq56/Backend-UD/assets/94803522/ebd702d0-b565-4ea3-a89a-12f148ecdc94)

![image](https://github.com/juandiegoq56/Backend-UD/assets/94803522/f8321ca1-fa46-4a34-ac4e-5e9efe4748fd)


Permite crear un nuevo equipo en el torneo.

- **Método:** `POST`
- **Endpoint:** `http://localhost:8080/equipos`
- **Body:**
  ```json
  {
      "nombre": "Tolima FC",
      "pais": "Colombia",
      "fundacion": 1975
  }

  



## Partidos
![image](https://github.com/juandiegoq56/Backend-UD/assets/94803522/832c943d-e8d2-4e62-a2de-355042d66e6f)

![image](https://github.com/juandiegoq56/Backend-UD/assets/94803522/97629852-99e4-440b-8fa8-20ae83bc0e33)


Permite registrar los resultados de un partido entre dos equipos.

- **Método:** `POST`
- **Endpoint:** `http://localhost:8080/partidos`
- **Body:**
  ```json
  {
    "localScore": 4,
    "foreanScore": 5,
    "localId":1,
    "visitanteId":1
  }

## Obtener Tabla de Posiciones
Permite obtener la tabla de posiciones actualizada del torneo.
![image](https://github.com/juandiegoq56/Backend-UD/assets/94803522/e142e68b-1584-4f26-a787-56b9dc7929bb)
![image](https://github.com/juandiegoq56/Backend-UD/assets/94803522/443b520d-b370-4cdd-a314-f0fa6e35ef74)



Método: GET
Endpoint: http://localhost:8080/partidos/getTabla

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - Juan Diego Quintero.


## License

Nest is [MIT licensed](LICENSE).
