# LTI - Sistema de Seguimiento de Talento (ATS)

Este proyecto es un Sistema de Seguimiento de Talento (ATS) llamado 'LTI'. Está desarrollado usando TypeScript. Para el FrontEnd se usa React, para el BackEnd se usa Node y Express, y PostgreSQL como base de datos. Todo esto siguiendo principios de Diseño dirigido por el dominio (DDD) y desarrollo rápido dirigido por pruebas (TDD).

## Tecnologías Utilizadas
- TypeScript
- React
- Node.js
- Express
- PostgreSQL

## Principios de Desarrollo
- Diseño dirigido por el dominio (DDD)
- Desarrollo rápido dirigido por pruebas (TDD)

## Instalación
1. Clona el repositorio
2. Instala las dependencias con `npm install`

## Estructura del Proyecto

.env .gitignore backend/ coverage/ clover.xml coverage-final.json lcov-report/ ... lcov.info jest.config.js package_backup.json package.json src/ tests/ api/ application/ config/ domain/ index.ts infrastructure/ tsconfig.json docker-compose.yml Dockerfile frontend/ .gitignore package.json public/ index.html manifest.json robots.txt README.md src/ App.css ... tsconfig.json License.md LTI.code-workspace package.json README.md tsconfig.json Version

## Backend

El backend está construido usando Express y Sequelize.

### Scripts Disponibles

En el directorio `backend`, puedes ejecutar:

#### `npm start`

Ejecuta el servidor backend en modo desarrollo. El servidor se reiniciará si haces ediciones.

#### `npm run build`

Construye el backend para producción.

#### `npm test`

Ejecuta la suite de pruebas.

#### `npm run test:watch`

Ejecuta la suite de pruebas en modo observación.

#### `npm run test:coverage`

Genera un informe de cobertura de pruebas.

### Configuración

La configuración del backend se encuentra en el archivo [backend/src/config/database.ts](backend/src/config/database.ts).

## Frontend

El frontend está construido usando Create React App.

### Scripts Disponibles

En el directorio `frontend`, puedes ejecutar:

#### `npm start`

Ejecuta la aplicación en modo desarrollo. Abre [http://localhost:3000](http://localhost:3000) para verla en el navegador.

#### `npm test`

Lanza el corredor de pruebas en modo interactivo.

#### `npm run build`

Construye la aplicación para producción en la carpeta `build`.

#### `npm run eject`

Expulsa la configuración de Create React App.

### Aprende Más

Puedes aprender más en la [documentación de Create React App](https://facebook.github.io/create-react-app/docs/getting-started).

Para aprender React, consulta la [documentación de React](https://reactjs.org/).

## Docker
Dockerfile
El Dockerfile se usa para construir la imagen Docker para el backend.
Puedes usar Docker para ejecutar toda la pila de la aplicación.

### Docker Compose

Para iniciar la aplicación usando Docker Compose, ejecuta:

 aplicación usando Docker Compose, ejecuta:

```sh
docker-compose up

Licencia
Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo License.md para más detalles.