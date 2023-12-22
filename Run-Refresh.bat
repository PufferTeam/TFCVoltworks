@echo off
SET zi="C:\Program Files\7-Zip\7z.exe"
SET re=%~dp0resources\
SET ol=%~dp0config\openloader\

del %ol%data\TFCVoltworks-Data.zip
del %ol%resources\TFCVoltworks-Resources.zip

call "Run-Prettier.bat"

%zi% a %ol%data\TFCVoltworks-Data.zip %re%data
%zi% a %ol%data\TFCVoltworks-Data.zip %re%pack.mcmeta
%zi% a %ol%resources\TFCVoltworks-Resources.zip %re%assets
%zi% a %ol%resources\TFCVoltworks-Resources.zip %re%pack.mcmeta

packwiz refresh
pause