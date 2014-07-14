/*
debug infomation
*/
if (typeof console == "undefined") {
  var logArr = window.logArr = [];
  console = window.console = {
    log : function() {
      logArr.push(arguments);
    }
  };
}

(function(window) {

  /*ALARM navigation to where*/
  window.ALARMNAVI = {
    0: "pdus",
    1: "ips",
    2: "cbs",
    3: "outlets",
    4: "extsens"
  };

  window.SENSORALARMURL = {
    // 1: "alarmsensortemp",
    1: "sensor1",
    // 2: "alarmsensorhum",
    2: "sensor2",
    // 3: "alarmsensordoor",
    3: "sensor3",
    4: "alarmsensordry",
    5: "alarmsensorspot",
    6: "alarmsensorrope",
    7: "alarmsensorsmoke",
    8: "alarmsensorbeacon"
  };

  //Related to color, will no move the language packaged.
  window.STATUSTYPE = {
    0 : "Off",
    1 : "Upper Critical",
    2 : "Upper Warning",
    3 : "Alarm",
    4 : "Lower Warning",
    5 : "Normal",
    8 : "Lower Critical"
  };

  //PRIVILEGES with order
  window.PRIVILEGES_Arr = [
    0x00000100 ,
    0x00010000 ,
    0x00020000 ,
    0x00000010 ,
    0x00004000 ,
    0x02000000 ,
    0x00000080 ,
    0x00000020 ,
    0x00040000 ,
    0x00000200 ,
    0x00000040 ,
    0x00000400 ,
    0x00000008 ,
    0x00000002 ,
    0x00000004 ,
    0x00080000 ,
    0x00100000 ,
    0x00000800 ,
    0x01000000 ,
    0x00800000 ,
    0x00001000 ,
    0x00200000 ,
    0x00400000 ,
    0x00008000 ,
    0x00002000
  ];
  
  window.devtypeinfo = 0;
  window.phasetypeinfo = 1;

  //add by zzw begin
  window.THRESHODE_DEFAULT = {
    current : 0.5,
    voltage : 2,
    power : 100,
    sensorT : 1,
    sensorH : 3
  };
  //add by zzw end

  //EnLogic namespace
  var EL = window.EL = window.EL || {};

  EL.debug = 1;

  //MODEL
  window.MODEL = {};

})(window);
