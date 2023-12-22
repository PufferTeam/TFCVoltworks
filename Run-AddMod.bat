@echo off
cls
:start
set /p id="Mod Name: "
set /p co="Remove or Add [A/R] : "

if /I "%co%" EQU "A" set pakku_op=add
if /I "%co%" EQU "A" set packwiz_op=curseforge add
if /I "%co%" EQU "A" set git_op=Added
if /I "%co%" EQU "R" set pakku_op=rm
if /I "%co%" EQU "R" set packwiz_op=remove
if /I "%co%" EQU "R" set git_op=Removed

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
git add ./mods/%id%.pw.toml
git add ./index.toml
git add ./pack.toml
git add ./pakku-lock.json
git commit -am "%git_op% %id%."
git push

java -jar Pakku-0.0.6.jar fetch
git restore *.pw.toml
git restore *.jar

goto start

pause