#!/bin/bash

#show commands
set -x

#combine
mkdir web/js
mkdir web/css
mkdir web/public
mkdir web/private

#minifier JS/CSS/HTML
#require uglify js: [sudo]npm install uglify-js -g
uglifyjs  src/js/prod.js -o web/js/prod.js
uglifyjs  src/js/locale.cn.js -o web/js/locale.cn.js
uglifyjs  src/js/locale.de.js -o web/js/locale.de.js
java -jar tool/yuicompressor-2.4.7.jar src/css/prod.css  -o  web/css/prod.css
java -jar tool/htmlcompressor-1.5.3.jar src/index.htm > web/index.htm

cp src/public/*     web/public          -r
cp src/private/*    web/private         -r
cp src/js/ie8.js 	web/js/ie8.js


#wait for 10 seconds
sleep 20