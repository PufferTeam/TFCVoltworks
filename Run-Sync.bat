echo Committing to Git...
git add .
git commit -am "Updated the modlist."
git push

java -jar Pakku-0.0.6.jar fetch
git restore *.pw.toml
git restore *.jar