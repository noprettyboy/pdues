#!/bin/bash

#show commands
set -x

#combine js and css
cd src/js
cat jquery-1.10.2.min.js bootstrap.min.js jquery.bootstrap.js jquery.validate.js jquery.cookie.js jquery.inputToJSON.js LAB.src.js string.Base64.js doT.js setting.js locale.en.js validator.js el.auth.js el.master.js el.login.js el.locale.js el.changepsw.js el.resetnetwork.js el.resetdev.js el.datetime.js el.getdevinfo.js el.dashboards.js el.telnet.js el.http.js el.datalog.js el.download.js el.user.js el.setalarm.js el.privileges.js el.snmp.js el.uploadfile.js el.pduinfoset.js el.eventrule.js el.sensorinfo.js > prod.js
cat html5shiv.js respond.min.js > ie8.js

cd ../css
cat bootstrap.min.css site.css > prod.css

cd ../../tool
# Update version in device info
node version.js

#wait for 10 seconds
sleep 20
