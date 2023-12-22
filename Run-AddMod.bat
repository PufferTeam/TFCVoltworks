@echo off
cls
:start
set /p id="Mod Name: "
java -jar Pakku-0.0.6.jar add %id%
packwiz curseforge add %id%
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
git commit -am "Added %id%."
git push

java -jar Pakku-0.0.6.jar fetch
git restore *.pw.toml
git restore *.jar

goto start

pause