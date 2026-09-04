@echo off
echo Starting Paradigm Traders Local Server on http://localhost:5500 ...
powershell -ExecutionPolicy Bypass -File "%~dp0server.ps1"
pause
