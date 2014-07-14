(function(window){window.ALARMTYPE={0:"Unit",1:"Eingabephase",2:"Sicherungsautomat",3:"Outlets",4:"Externe Sensoren"};window.SENSORTYPE={1:"Temperatur",2:"Feuchtigkeit (%)",3:"Türkontakt",4:"Kontaktsensor",5:"Flüssigkeits-Leckagesensor",6:"Doppelboden-Feuchtigkeitssensor",7:"Rauch",8:"Leuchtsignal"};window.TEMPUNIT={0:"C",1:"F"};window.ALARMUNITTYPE={A:{unit:" (A)",factor:1e3,fixed:2,max:16,min:0,title:"Stromstärke"},V:{unit:" (V)",factor:1e3,fixed:0,max:260,min:90,title:"Stromspannung"},VA:{unit:" (VA)",factor:1e3,fixed:0,min:0,max:49140,title:"Scheinleistung"},W:{unit:" (W)",factor:1e3,fixed:0,min:0,max:49140,title:"Aktive Leistung"},Wh:{unit:" (Wh)",factor:1e3,fixed:2,min:0,max:1e9,title:"Energie"},C:{unit:" (°C)",factor:1,fixed:0,min:0,max:75,title:"Temperatur"},F:{unit:" (F)",factor:1,fixed:0,min:32,max:167,title:"Temperatur"},H:{unit:" (%)",factor:1,fixed:0,min:15,max:90,title:"Feuchtigkeit"}};window.POWERENERGY={activepower:"Aktive Leistung (W)",apparentpower:"Scheinleistung (VA)",totalenergymeter:"Gesamtstrom (kWh)"};window.EVENTMAP={1:"Critical alarm",2:"Warning alarm",4:"External sensor status changed",8:"PDU configuration file imported/exported",16:"Firmware update",32:"Network card reset/start",64:"Communication status changed",128:"Password Changed",256:"Log File Cleared(PS:including data log and event log)",512:"Network Interface Link Status Changed"};MODEL.eventrl={spEnableAll:"Enable All",spEventRule:"Event Rule"};EL.TreeRoot={id:"dashboard",text:"Dashboard",iconCls:"icon-desk"};MODEL.login={title:"Login",username:"User-Name",password:"Passwort",login:"Login",clear:"Löschen"};MODEL.master={useradmin:{txt:"User-Verwaltung",changepw:{txt:"Passwort ändern",dlg:"User-Passwort ändern"},users:{txt:"User",dlg:"User verwalten"},roles:{txt:"Rollen",dlg:"Rollen verwalten"}},deviceadmin:{txt:"Gerätekonfiguration",networkser:{txt:"Netzwerkdienste",http:{txt:"HTTP",dlg:"HTTP Einstellungen"},snmp:{txt:"SNMP",dlg:"SNMP Einstellungen"},ssh:{txt:"SSH",dlg:"SSH Einstellungen"},telnet:{txt:"TELNET",dlg:"TELNET Einstellungen"},ftp:{txt:"FTP",dlg:"FTP Einstellungen"}},networkcon:{txt:"Netzwerkkonfiguration",dlg:"Netzwerkkonfiguration"},security:{txt:"Sicherheit",loginset:{txt:"Login-Einstellungen",dlg:"Login-Einstellungen"},passwordpol:{txt:"Passwort-Richtlinien",dlg:"Passwort-Richtlinien"},forcehttps:{txt:"Force HTTPS für Webzugang",dlg:"Force Https"}},eventrules:{txt:"Ereignisregeln",dlg:"Ereignisregel-Einstellungen"},datalog:{txt:"Datenlog",dlg:"Datenlog-Einstellungen"},datetime:{txt:"Datum/Zeit-Einstellungen ändern",dlg:"Zeit/Datum Einstellungen konfigurieren"},smtpemail:{txt:"SMTP-Email",dlg:"SMTP Server-Einstellungen"},serverreach:{txt:"Server-Erreichbarkeit",dlg:"Server-Erreichbarkeit"},usb:{txt:"USB",dlg:"USB Einstellungen"},pduinfo:{txt:"PDU Info",dlg:"PDU Info Settings"},sensorinfo:{txt:"LDAP",dlg:"LDAP Einstellungen"}},systemadmin:{txt:"Systemverwaltung",vweventlog:{txt:"Ereignislog ansehen",dlg:"Ereignislog ansehen"},vwdatalog:{txt:"Datenlog ansehen",dlg:"Datenlog ansehen"},firmwaremt:{txt:"Firmware-Wartung",udfirmware:{txt:"Firmware aktualisieren",dlg:"Firmware aktualisieren"},vwfirmwareud:{txt:"Firmware-Updateverlauf ansehen",dlg:"Firmware-Updateverlauf"}},conusers:{txt:"Verbundene User",dlg:"Verbundene User"},diagnostic:{txt:"Diagnostics",dldiaginfo:{txt:"Diagnostics-Informationen",dlg:"Diagnostics-Informationen herunterladen"}},pduconfig:{txt:"PDU-Konfigurationsdatei",dlg:"Konfigurationsdatei"},deviceinfo:{txt:"Geräteinformationen",dlg:"Geräteinformationen"},nwcardreset:{txt:"Netzwerkkarte zurücksetzen",dlg:"Netzwerkkarte zurücksetzen"}},help:{txt:"Hilfe",userguide:{txt:"Bedienungsanleitung",dlg:"Bedienungsanleitung"}},setalarmdl:{lowercritical:"Kritisch: Wert zu niedrig",lowerwarning:"Warnung: Wert zu niedrig ",upperwarning:"Warnung: Wert zu hoch",uppercritical:"Kritisch: Wert zu hoch",resetthreshold:"Threshold zurücksetzen",alarmscdelay:"Alarmstatusänderung verzögern (Muster):",alarmsetting:"Alarmeinstellungen",enablealarm:"Alarmeinstellungen aktivieren",updatefail:"Update fehlgeschlagen",lowcriticalinfo:'"Kritisch: Wert zu niedrig" + Grenze muss niedriger oder gleich sein als "Warnung: Wert zu niedrig"',lowwarninfo:'"Warnung: Wert zu niedrig" + 2-fache Reset-Grenze muss weniger oder gleich sein als "Warnung: Wert zu hoch"',upwarninfo:'"Warnung: Wert zu hoch" + Grenze muss weniger oder gleich sein als "Kritisch: Wert zu hoch"',lowcriticalinfo2:'"Kritisch: Wert zu niedrig" + 2-fache Reset-Grenze muss weniger oder gleich sein als "Warnung: Wert zu hoch"',lowcriticalinfo3:'"Kritisch: Wert zu niedrig" + 2-fache Reset-Grenze muss weniger oder gleich sein als "Kritisch: Wert zu hoch"',lowwarninfo2:'"Warnung: Wert zu niedrig" + 2-fache Reset-Grenze muss weniger oder gleich sein als "Kritisch: Wert zu hoch"'},resetdevicedl:{txt:"Netzwerkkarte zurücksetzen",txt1:"Die Netzwerkkarte wird in wenigen Sekunden zurückgesetzt.",txt2:"Sie werden zurück zur Login-Seite geleitet in",txt3:"Sekunden.",txt4:"Wenn diese Weiterleitung nicht funktioniert, nutzen Sie",txt5:"diesen Link",txt6:"zur Login-Seite."},language:{txt:"Sprache",type:{en:"English",cn:"Chinesisch"}},logout:"Abmelden",doreallylogout:"Wollen Sie sich wirklich abmelden?",tree:"PDU Explorer",login:"Eingeloggt als {0}",greeting:"Willkommen bei Enlogic",ip:"<b>IP-Adresse: </b>{0}",time:"<b>Login-Zeit: </b>{0}"};MODEL.dashboard={loading:"Lade",status:"Status",alarms:"Alarme",ok:"Ok",currentrms:"Stärke, RMS (A)",currentrms2:"Stärke, RMS (A)",cb1current:"CB1 Current",cb2current:"CB2 Current",cb1status:"CB1 Status",cb2status:"CB2 Status",voltagerms:"Spannung, RMS (V)",voltenergy:"Energy (kWh)",pdupowerenergy:"PDU Stromleistung",externalsensor:"Externe Sensoren, Typ",externalsensortype:"Type",sensorname:"Sensorname",pduname:"PDU Name",location:"Ort",value:"Wert"};MODEL.pdu={pduset:"PDU Einstellung",pduenergy:"PDU Energie",pduattribute:"PDU Attribute",pduname:"PDU Name",pdulocation:"PDU Ort",pduunitdelay:"PDU Einheit Kaltstart-Verzögerung (0 - 3600 s)",outletstate:"Outlet-Status bei PDU-Start",resetenergy:"Strom zurücksetzen",resetolenergy:"Outlet-Strom zurücksetzen",pdumacaddress:"PDU MAC Adresse",rating:"Bewertung",resetenergymeter:"Zurücksetzbarer Strommesser",activepowervalue:"Wert Aktive Leistung (W)",activepowerset:"Aktive Leistung Status, Einstellung",reset:"Zurücksetzen",resetsuccess:"Erfolgreich zurückgesetzt!",surechangeol:"Wollen Sie diese Änderung wirklich auf alle Outlets anwenden?",reallyresetenergy:"Wollen Sie wirklich den Strom zurücksetzen?",nopermission:"Keine Befugnis:"};MODEL.phases={phasecurrentrms:"Phasenstrom, RMS",reading:"Lese ",lowercritical:"Kritisch: Wert zu niedrig ",lowerwarning:"Warnung: Wert zu niedrig ",upperwarning:"Warnung: Wert zu hoch ",uppercritical:"Kritisch: Wert zu hoch ",statusset:"Status, Einstellung",phasevoltagerms:"Phasenspannung, RMS",phasepower:"Phasenstrom",apparentpower:"Scheinleistung (VA)",powerfactor:"Stromfaktor",activepower:"Aktive Leistung (W)"};MODEL.sensor={id:"ID",typeset:"Typ",statusset:"Status, Einstellung",value:"Wert",serialno:"Seriennr.",aisle:"Gang",name:"Name",description:"Beschreibung",location:"Ort"};MODEL.changepw={oldpass:"Altes Passwort",newpass:"Neues Passwort",cfmpass:"Passwort bestätigen",chgpwfail:"Passwortänderung fehlgeschlagen.",confirminfo:"After changing the setting, you will need to login again.<br/> Do you really want to apply changes now?"};MODEL.users={username:"Username",password:"Passwort",cfpassword:"Passwort bestätigen"};window.PINGSTATUS={0:"Erreichbar",1:"Nicht erreichbar",2:"Warte auf zuverlässige Antwort",3:"Fehler"};MODEL.netsvr={change:"Nachdem Sie diese Einstellungen ändern, müssen Sie die Netzwerkkarte zurücksetzen, damit sie aktiv werden. Wollen Sie diese Änderungen jetzt anwenden?"};MODEL.resetdev={doresetcard:"Wollen Sie die Netzwerkkarte wirklich zurücksetzen?"};MODEL.http={httpport:"HTTP Port",httpsport:"HTTPS Port"};MODEL.snmp={general:"Allgemein",traps:"Traps",snmpv12set:"SNMP v1 / v2c Einstellungen",snmpv12:"SNMP v1 / v2c",enable:"Aktivieren",readcs:"Community-String lesen",writecs:"Community-String beschreiben",snmpv3set:"SNMP v3 Einstellungen",snmpv3:"SNMP v3",mibiigroup:"MIB-II Systemgruppe",syscontact:"sysContact",sysname:"sysName",syslocation:"sysLocation",snmptrapset:"SNMP Trap Einstellungen",snmptraprule:"System Snmp Trap Ereignisregel",host:"Host",port:"Port",community:"Community"};MODEL.telnet={telnetport:"Telnet Port",enabletelnet:"Telnet-Zugang aktivieren"};MODEL.network={ipprotocol:"IP-Protokoll",ipv4set:"IPv4 Einstellungen",ipv4only:"Nur IPv4",ipv6only:"Nur IPv6",ipv46:"IPv4 & IPv6",preference:"Präferenz",ipv4address:"IPv4 Adresse",ipv6address:"IPv6 Adresse",ipautoconfig:"IP Auto-Konfiguration",ipaddress:"IP Adresse",netmask:"Netzmaske",gateway:"Gateway",dhcppro:"Primärer DNS-Server",staticpro:"Sekundärer DNS-Server"};MODEL.datalog={loginterval:"Log-Intervall (1 - 1440 Minuten)",enablelog:"Datenlog aktivieren",illustrateinfo:"Das Datenlog kann bis zu 2000 Einträge speichern. Die maximale Speicherzeit der Daten hängt von der Log-Intervalleinstellung ab. Wenn z.B. der Logintervall 600 Sekunden (10 Minuten) ist, kann das Log bis 13.89 Tage Daten speichern. Wenn das Log die maximale Kapazität erreicht hat, werden die ältesten Einträge mit den neuesten überschrieben."};MODEL.datetime={timezone:"Zeitzone",usertime:"Userspezifische Zeit",date:"Datum (JJJJ/MM/TT Stunde:Minute:Sekunde)",time:"Zeit (Stunde:Minute:Sekunde)",synntpserver:"An NTP Server anpassen",firstip:"IP Adresse des ersten Servers",secondip:"IP Adresse des zweiten Servers",checkntp:"NTP-Server prüfen",checkntpinfo:"Bitte geben Sie den richtigen NTP-Server ein!"};MODEL.pduinfo={pdunm:"PDU Name:",pduloc:"Location:"};MODEL.diagnostic={downloadlog:"Diagnostic-Informationen herunterladen",clearlog:"Clear Log",confirminfo:"Are you sure to clear PDU log?"};MODEL.blkconf={dlconf:"Konfiguration herunterladen",dlconffile:"Konfigurationsdatei herunterladen",Uploadconf:"Konfiguration hochladen",upload:"Hochladen",uploadsucc:"Upload erfolgreich, aktualisiere...",applyconf:"Konfiguration anwenden",pleasewait:"Bitte warten...!"};MODEL.devinfo={pduinfo:"PDU-Informationn",outlets:"Outlets",circbreak:"Sicherungsautomaten",sku:"SKU",serialnum:"Seriennummer",rating:"Wertung",functype:"Funktionstyp",functypev:"Metered",ipv4addr:"Geräte IPv4 Adresse",ipv6addr:"Geräte IPv6 Adressen",macaddr:"Gerät-MAC-Adresse",fwversion:"Firmware-Version",webversion:"Web-Version",pdumib:"PDU-MIB",download:"Download",label:"Label",operatevol:"Betriebsspannung",ratecurrent:"Nennstrom",type:"Typ",protoutlet:"Geschützte Outlets"};window.CBTYPE={0:"Keine",1:"Sicherungsautomat 1-polig",2:"Sicherungsautomat 2-polig"};MODEL.buttons={cancels:"Abbrechen",oks:"Ok",closes:"Schließen",yes:"Ja",no:"Nein",save:"Speichern",edit:"Bearbeiten",action:"Aktion",message:"Nachricht",info:"Information",runping:"Ping ausführen",run:"Ausführen"};MODEL.master.setalarmdl.alarm="Alarme";MODEL.master.setalarmdl.off="Ein";MODEL.master.setalarmdl.on="Aus";MODEL.master.setalarmdl.disable="Ausschalten";MODEL.master.setalarmdl.enable="Einschalten";MODEL.master.setalarmdl.normal="Normal";window.VALID={ipv4:"Bitte geben Sie eine gültige ipv4-Adresse ein",ipv6:"Bitte geben Sie eine gültige ipv6-Adresse ein",nowhite:"Leerzeichen sind nicht erlaubt",greater:"Geben Sie bitte eine größere Nummer ein",customdate:"Geben Sie bitte ein gültiges Datum ein",lowchar:"Geben Sie bitte mindestens einen Kleinbuchstaben ein",uppchar:"Geben Sie bitte mindestens einen Großbuchstaben ein ",numchar:"Geben Sie bitte mindestens eine Nummer ein",spechar:"Geben Sie bitte mindestens ein Sonderzeichen ein",diffval:"Geben Sie bitte einen verschiedenen Wert ein",oldpwd:"Please enter a correct old password."};MODEL.login.authfail="Authentifizierung fehlgeschlagen";MODEL.login.connfail="Verbindung abgelehnt";MODEL.datetime.succ="Erfolgreich";MODEL.datetime.fail="Nicht erfolgreich"})(window);(function($){$.extend($.validator.messages,{required:"Dieses Feld ist ein Pflichtfeld.",maxlength:$.validator.format("Geben Sie bitte maximal {0} Zeichen ein."),minlength:$.validator.format("Geben Sie bitte mindestens {0} Zeichen ein."),rangelength:$.validator.format("Geben Sie bitte mindestens {0} und maximal {1} Zeichen ein."),email:"Geben Sie bitte eine gültige E-Mail Adresse ein.",url:"Geben Sie bitte eine gültige URL ein.",date:"Bitte geben Sie ein gültiges Datum ein.",number:"Geben Sie bitte eine Nummer ein.",digits:"Geben Sie bitte nur Ziffern ein.",equalTo:"Bitte denselben Wert wiederholen.",range:$.validator.format("Geben Sie bitte einen Wert zwischen {0} und {1} ein."),max:$.validator.format("Geben Sie bitte einen Wert kleiner oder gleich {0} ein."),min:$.validator.format("Geben Sie bitte einen Wert größer oder gleich {0} ein."),creditcard:"Geben Sie bitte eine gültige Kreditkarten-Nummer ein."})})(jQuery);