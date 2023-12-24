# Usa la imagen oficial de Node.js 14 en Alpine como base
FROM node:16-alpine

# Establece el directorio de trabajo en /usr/src/app
WORKDIR /app

# Copia solo el directorio "dist" al directorio de trabajo
COPY ./dist /app/dist
COPY ./node_modules /app/node_modules
COPY ./package.json /app/package.json
COPY ./tsconfig.json /app/tsconfig.json
COPY ./mysqlScripts/wait-for-it.sh /app/wait-for-it.sh
RUN  chmod +x wait-for-it.sh

RUN apk add --no-cache bash

# Expone el puerto en el que la aplicación se ejecutará
EXPOSE 2023


# Comando para iniciar la aplicación    
CMD ["node", "dist/server.js"]


