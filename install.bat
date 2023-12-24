@echo off

echo "Instalando backend..."
REM Instalar dependencias en el directorio 'backend'
cd backend
call npm install 
call npm run build
cd ..
echo "Instalando frontend..."
REM Instalar dependencias en el directorio 'frontend'
cd frontend
call npm install 
call npm run build:tailwind
call npm run build
cd ..

call docker-compose up -d --build
timeout /t 5 /nobreak > nul
start chrome.exe "http://localhost:4488/"