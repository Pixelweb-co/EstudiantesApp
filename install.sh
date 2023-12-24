#!/bin/bash

echo "Instalando backend..."
# Instalar dependencias en el directorio 'backend'
cd backend || exit
npm install
npm run build
cd ..

echo "Instalando frontend..."
# Instalar dependencias en el directorio 'frontend'
cd frontend || exit
npm install
npm run build:tailwind
npm run build
cd ..

docker-compose up -d --build
