@echo off
cls
:start
set /p id="Mod Name: "
set /p co="Add/Remove/Update [A/R/U]: "

if /I "%co%" EQU "A" goto :add
if /I "%co%" EQU "R" goto :rem
if /I "%co%" EQU "U" goto :upd

:add
set pakku_op=add
set packwiz_op=curseforge add
set git_op=Added
goto :run

:rem
set pakku_op=rm
set packwiz_op=remove
set git_op=Removed
goto :run

:upd
set pakku_op=update
set packwiz_op=update
set git_op=Updated
goto :run

:run
java -jar Pakku-0.0.6.jar %pakku_op% %id%
packwiz %packwiz_op% %id%
packwiz refresh

set /p ci="Commit to Git [Y/N]: "

:choice
if /I "%ci%" EQU "Y" goto :yes
if /I "%ci%" EQU "N" goto :no
goto :choice

:no

echo Won't commit to Git
pause
exit

:yes

echo Committing to Git...
git add .
git commit -am "%git_op% %id%."
git push

java -jar Pakku-0.0.6.jar fetch
git restore *.pw.toml
git restore *.jar

goto start

pause