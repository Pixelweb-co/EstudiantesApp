@echo off

REM Instalar dependencias en el directorio 'backend'
cd backend
call npm install 
call npm run build
cd ..

REM Instalar dependencias en el directorio 'frontend'
cd frontend
call npm install 
call npm run build:typescript
call npm run build
cd ..

call docker-compose up -d --build
