@echo off
echo ========================================
echo   Mannem Varshith Portfolio Setup
echo ========================================
echo.

echo Setting up backend...
cd server
echo Installing backend dependencies...
npm install
echo.
echo Backend setup complete!
echo.
echo Setting up frontend...
cd ..\client
echo Installing frontend dependencies...
npm install
echo.
echo Frontend setup complete!
echo.
echo ========================================
echo Setup Complete!
echo ========================================
echo.
echo Next steps:
echo 1. Create .env files in both server and client directories
echo 2. Update MongoDB connection string in server/.env
echo 3. Update API URL in client/.env
echo 4. Run 'npm run seed' in server directory to populate database
echo 5. Start backend: cd server && npm run dev
echo 6. Start frontend: cd client && npm run dev
echo.
echo For detailed instructions, see README.md and DEPLOYMENT.md
echo.
pause 