@echo off
echo ===================================================
echo Preethi ^& Naveen Kumar Wedding Website - Setup
echo ===================================================
echo.
echo Installing Node.js dependencies...
call npm install
if %errorlevel% neq 0 (
    echo.
    echo Error during npm install. Please ensure Node.js is installed.
    pause
    exit /b %errorlevel%
)

echo.
echo Starting Next.js development server...
echo The website will be available at http://localhost:3000
echo.
call npm run dev
pause
