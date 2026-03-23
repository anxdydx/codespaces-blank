@echo off
echo  DIDDY...

echo Installing Chocolatey...
powershell -NoProfile -ExecutionPolicy Bypass -Command ^
"Set-ExecutionPolicy Bypass -Scope Process -Force; ^
[System.Net.ServicePointManager]::SecurityProtocol = 3072; ^
iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))"

echo Installing Node.js...
choco install nodejs-lts -y

echo Installing Git...
choco install git -y

call refreshenv

cd /d %~dp0

echo Installing dependencies...
npm install


echo Starting project...
npm start

pause