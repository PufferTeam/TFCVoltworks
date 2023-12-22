@echo off
cls
:start
set /p id="pakku "
java -jar Pakku-0.0.6.jar %id%
goto start

pause