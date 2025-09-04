@echo off
echo ========================================
echo    SubeTusRedes - Modo Desarrollo
echo ========================================
echo.

REM Verificar si Node.js esta instalado
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Node.js no esta instalado.
    echo Por favor instala Node.js desde: https://nodejs.org/
    echo.
    pause
    exit /b 1
)

echo Verificando dependencias...

REM Verificar si node_modules existe
if not exist "node_modules" (
    echo Instalando dependencias...
    npm install
    if %ERRORLEVEL% NEQ 0 (
        echo ERROR: No se pudieron instalar las dependencias.
        pause
        exit /b 1
    )
)

echo.
echo ========================================
echo   Iniciando servidor de desarrollo...
echo   URL: http://localhost:3000
echo ========================================
echo.
echo La web se abrira automaticamente.
echo Presiona Ctrl+C para detener el servidor.
echo.

REM Iniciar el servidor de desarrollo
npm start
