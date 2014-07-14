(function(window, document) {

  var refreshTimer;

  var timerID = 0
    , slowTimerID = 0
    , setTimerID = 0
    ;

  /*
  DashBoard functionalities
  */
  var self = EL.DashBoard = function() {

    var model = MODEL.dashboard;

    var $currentGrid  = $("#currentgrid")
      , $voltageGrid  = $("#voltagegrid")
      , $energyGrid   = $("#energygrid")
      //, $circuitGrid  = $("#circuitGrid")
      , $alarmsGrid   = $("#alarmsgrid")
      , $sensorGrid   = $("#sensorgrid")
      , interval      = 1000
      //, title = "Loading"
      , irmcInfo      = { energy_reset: 0 }
      , title         = model.loading;

    //Need to refresh the dashboard?
    self.visibleAll = function() {
      // return $("#mydialog:visible").size() < 1
      //   &&  $(".dashboard:visible").size() > 0;
      return true;
    };

    //Need to refresh the datagrid?
    self.visible = function() {
      //There is: 1) no dialog popuped 2) dashboard is visiable, 3) No force change password
      //return $(".dashboard:visible").size() > 0;
      return $(".dialog.modal:visible").size() <= 0;
    };

    var plot
      , yAxis
      ;

    self.filterColsByRows = function(cols, rows) {
      var newCols = []
        , row     = rows[0];

      if (!row) return cols;

      for (var i = 0, l = cols.length; i < l; i++) {
        var col = cols[i];
        typeof  row[col.field] != "undefined" && row[col.field] != -1 && newCols.push(col);
      }

      return newCols;
    };

    //add by zzw begin
    var resetEnergy;
    var resetTime;
    self.getResetEnergy = function() {
      $.getJSON("private/resetenergy.json?action=0", function(data) {
          var resetegy = parseInt(data.result2);
          resetEnergy = (resetegy/10).toFixed(1);
          resetTime = data.resettime;
      });
    };
    //add by zzw end

    //Prevent click too fast
    self.init = function() {
      self.setInitTimer();
      self.getInitPDUType();
      self.start();
    };

    self.start = function() {
      //stop timer previous opened
      self.stop();

      timerID = window.setInterval(function() {
        self.getResetEnergy();
        self.getEnergyParams();
      } , 2 * interval);

      // slowTimerID = window.setTimeout(function() {
      slowTimerID = window.setInterval(function() {
        self.getSensors();
        self.getPDUInfo();
      }, 10 * interval)

      //refresh once
      self.getResetEnergy();
      self.getEnergyParams();
      self.getSensors();
      self.getPDUInfo();
    };
    
    /*
    Before refresh stop all the timer
    */
    self.stop = function() {
      window.clearInterval(timerID);
      window.clearInterval(slowTimerID);
    };

    var timer = 0;

    var data = []
      , totalPoints = 150;

    function getChartData(val) {

      data.length > totalPoints && (data = data.slice(1));

      // Do a random walk
      while (data.length < totalPoints) {
        data.push(val);
      }

      typeof val != "undefined" && data.push(val);

      var res = [];
      for (var i = 0; i < data.length; ++i) {
        res.push([i * 2, data[i]])
      }

      return res;
    }

    // var initTimer = function(datetime) {
    //   window.clearInterval(setTimerID);
    //   // console.log("yi"+datetime);
    //   var curtime       = datetime || new Date()
    //     , $currenttime  = $("#currenttime")
    //     ;
    //   var formatTime = function(time) {
    //     var strTime = (time || curtime).toString()
    //       , idxGMT = strTime.indexOf("GMT")
    //       ;
    //     (idxGMT < 0) && (idxGMT = strTime.indexOf("UTC"));
    //     return strTime.substr(0, idxGMT);
    //   };
    //   var updateCurrentTime = function() {
    //     // console.log("er"+formatTime());
    //     $currenttime.html(formatTime());
    //     curtime = new Date(1000 + +curtime);
    //     // console.log(curtime);
    //   };
    //   setTimerID = window.setInterval(updateCurrentTime, 1000);
    //   updateCurrentTime();
    // };
    var initTimer = function(datetime) {
      window.clearInterval(setTimerID);
      var newdate = new Date(datetime);
      var datetime = newdate.getTime();
      
      var curtime       = datetime || new Date()
        , $currenttime  = $("#currenttime")
        ;
      var formatTime = function(time) {
        var strTime = (time || curtime).toString()
          , idxGMT = strTime.indexOf("GMT")
          ;
        (idxGMT < 0) && (idxGMT = strTime.indexOf("UTC"));
        return strTime.substr(0, idxGMT);
      };
      var updateCurrentTime = function() {
        $currenttime.html(formatTime());
        curtime = new Date(1000 + +curtime);
      };
      setTimerID = window.setInterval(updateCurrentTime, 1000);
      updateCurrentTime();
    };

    //add by zzw begin
    self.setInitTimer = function () {
      $.getJSON("private/irmc.json", function(json) {
        // initTimer(EL.DateTime.getDate(json.time));
        initTimer(json.time);
      });
    };
    self.getInitPDUType = function () {
      $.getJSON("private/devinfo.json", function(json) {
        window.devtypeinfo = json.result;
      });
    };
    // add by zzw end

    var tag = {};

    self.getPDUInfo = function() {

      if (!tag.alarmsGrid) {
        $alarmsGrid.datagrid({
          columns: [[
              {title: MODEL.devinfo.sku,  field:"sku"}
            , {title: model.status,       field:"unit", formatter: function() {
                return $(".alarm-lowercritical, .alarm-uppercritical, .alarm-lowerwarning, .alarm-upperwarning").size() >= 1
                          ? EL.SetAlarm.getAlarmTxt(STATUSTYPE[3]) : model.ok;
              }}
            , {title: model.pduname,      field:"name"}
            , {title: model.location,     field:"location"}
          ]]
        });

        tag.alarmsGrid = 1;
      }

      $.getJSON("private/irmc.json", function(json) {
        // initTimer(EL.DateTime.getDate(json.time));
        irmcInfo = json;
        $alarmsGrid.datagrid('loadData', {rows : [json]});
      });
    };

    self.getEnergyParams = function() {
      if (!self.visible()) return;

      var formatterStatus = function(val, row) {
        return "OK";
      };

      /*
      Get pdu energy
      */
      var setEnergyGrid = function(rows) {
        var energyVal =  rows[0].activepower || 0;

        if (!tag.energyGrid) {
          $energyGrid.datagrid({
            columns: [ self.filterColsByRows([
                {title: POWERENERGY.activepower,      field: "activepower"}
              , {field:"status", title:"{0}".format(model.status), formatter: function(value, row) {
                  return EL.SetAlarm.getAlarmStr(
                    "alarmpower", value, {}, "(W)", 0x00000010
                  );
                }}
              , {title: POWERENERGY.apparentpower,    field: "apparentpower"}
              , {field:"powerfactor", title:MODEL.phases.powerfactor, formatter: function(value, row) {
                  return (value/1000).toFixed(2);
                }}
            ], rows)]
          });
          tag.energyGrid = 1;
        }
        $energyGrid.datagrid('loadData', {rows : rows});
      };

      /*
      Get pdu voltage
      */
      var setVoltageGrid = function(rows) {
        //self.getChart([], "#voltagechart");
        if (!tag.voltageGrid) {
          $voltageGrid.datagrid({
            columns: [ self.filterColsByRows([
                {title: "L1", field: "l1"}
              // , {title: "L2", field: "l2"}
              // , {title: "L3", field: "l3"}
              , {field:"status", title:"{0}".format(model.status), formatter: function(value, row) {
                  return EL.SetAlarm.getAlarmStr(
                    "alarmvoltage", value, {}, "(V)", 0x00000010
                  );
                }}
              , {field:"totalenergymeter", title:POWERENERGY.totalenergymeter, formatter: function(value, row) {
                  return (value/10).toFixed(1);
                }}
              , {title: MODEL.phases.activepower, field: "totalenergymeter", formatter: function() {
                  return '<b class="tspan">(<span>{0} kWh</span>&nbsp;&nbsp;{1})</b>&nbsp;&nbsp;<a href="javascript:EL.DashBoard.resetEnergy()" class="menu" style="margin-left:1px;">{2}</a>'.format(          
                    resetEnergy
                    , resetTime
                    ,MODEL.pdu.reset
                    // , (irmcInfo.energy_reset).toFixed(1)
                    // , EL.DateTime.formatDate(EL.DateTime.getDate(irmcInfo.energy_reset_time))
                  );
                }}
            ], rows)]
          });
          tag.voltageGrid = 1;
        }

        $voltageGrid.datagrid('loadData', {rows: rows});
      };

      /*
      Get pdu current
      */
      var setCurrentGrid = function(rows) {
        //self.getChart([], "#currentchart");
        if (!tag.currentGrid) {
          $currentGrid.datagrid({
            columns: [ self.filterColsByRows([
                {title: "L1", field: "l1", formatter: function(value, row){return (value/10).toFixed(1);}}
              , {title: model.status, field: "l1status", formatter: function(value, row) {
                  return EL.SetAlarm.getAlarmStr(
                    "alarml1", value, {}, "(A)", 0x00000010
                  );
                }}
              , {title: model.cb1current, field: "cb1current", formatter: function(value, row){return (value/10).toFixed(1);}}
              , {field: "cb1status", title:"{0}".format(model.cb1status), formatter: function(value, row) {
                  return EL.SetAlarm.getAlarmStr(
                    "alarmcb1", value, {idx: 0}, "(A)", 0x00000010
                  );
                }}
              , {title: model.cb2current, field: "cb2current", formatter: function(value, row){return (value/10).toFixed(1);}}
              , {field: "cb2status", title:"{0}".format(model.cb2status), formatter: function(value, row) {
                  return EL.SetAlarm.getAlarmStr(
                    "alarmcb2", value, {idx: 1}, "(A)", 0x00000010
                  );
                }}
            ], rows)]
          });
          tag.currentGrid = 1;
        }

        $currentGrid.datagrid('loadData', {rows: rows});
      };

      $.ajax({
        url: "public/energy.json",
        dataType: "json",
        success: function(data) {
          if (data.current.cb1status==-1 && data.current.cb2status==-1) {
            $("#currentdiv2").show();
            $("#currentdiv1").hide();
            $currentGrid  = $("#currentgrid2");
          } else {
            $("#currentdiv1").show();
            $("#currentdiv2").hide();
            // $currentGrid  = $("#currentgrid2");
          }        
          setEnergyGrid([data.energy]);
          setVoltageGrid([data.voltage]);
          setCurrentGrid([data.current]);
          //setCircuitGrid([data.circuit]);
        }
      });
    };

    self.getSensors = function() {
      if (!self.visible()) return;
      var sensorHandler = function(data) {
        var dataArr = [];
        $.each(data, function (key, value) {
          if (0 != value.connection) {
            dataArr.push(value);
          }
        });
        
        $sensorGrid.datagrid({
          columns:[[
            {field:"type", title:"{0}".format(model.externalsensortype), formatter: function(value) {
              return SENSORTYPE[value];
            }},
            {field:"status", title:"{0}".format(model.status), formatter: function(value, row) {
              //return STATUSTYPE[value];
              var type = row["type"]
                , unit;

              (type == 1) && (unit = TEMPUNIT[EL.Privilege.temperature]);
              (type == 2) && (unit = "H");

              return EL.SetAlarm.getAlarmStr(
                SENSORALARMURL[type], value, {sensortype: type}, unit, 0x00000010
              );
            }},
            {field:"sensorname", title:"{0}".format(model.sensorname)},
            // {field:"pduid", title:"{0}".format(model.pduid) },
            // {field:"pduname", title:"{0}".format(model.pduname) },
            {field:"aisle", title:"{0}".format(MODEL.sensor.aisle), formatter: function(value, row){
              if (1==value) {
                return "Hot";
              } else {
                return "Cold";
              } 
            } },
            {field:"value", title:"{0}".format(model.value), formatter: function(value, row){
              var type = row["type"];
              if(type==1) return (value/10).toFixed(1);
              if(type==2) return value;
            } } 
          ]]
        });
        
        $sensorGrid.datagrid("loadData", {rows: dataArr});

      };

      $.ajax({
          url: "public/sensor.json"
        , dataType: "json"
        , success: sensorHandler
      });

    };

    return self;
  };


  self.resetEnergy = function() {
    $.messager.confirm(MODEL.buttons.message, MODEL.pdu.reallyresetenergy, function() {
      $.getJSON("private/resetenergy.json?action=1", function(data) {
        $.messager.alert(MODEL.buttons.info, MODEL.pdu.resetsuccess);
        self.getResetEnergy();
      });
    });
  };

  /*update timeout*/
  var idleTimer;
  $(document.body).mousemove(function() {
    clearTimeout(idleTimer);
    idleTimer = setTimeout(function() {
      location.reload();
    }, 1000 * 60 * 20);
  });


})(window, document);