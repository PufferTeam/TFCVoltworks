@echo off
cls
:start
set /p id="packwiz "
packwiz %id%
goto start

pause