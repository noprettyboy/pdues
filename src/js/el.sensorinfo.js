/*User*/
(function() {

  EL.SensorSet = function() {

    var model = MODEL.users
      , $gdSensor = $('#gdSensor');

    var setSensorGrid = function(rows) {
      var dataArr = [];
      $.each(rows, function (key, value) {
        if (0 != value.connection) {
          dataArr.push(value);
        }
      });

      var cols = [[
        {field:"type", title:"{0}".format(MODEL.dashboard.externalsensortype), formatter: function(value) {
          return '<input value="{0}" name="sensortype" class="form-control" disabled="disabled"><input value="{1}" name="type" type="hidden">'.format(SENSORTYPE[value], value);
        }, readonly: true},
        {field:'sensorname', title:'{0}'.format(MODEL.dashboard.sensorname), formatter: function(val) {
          return '<input value="{0}" name="sensorname" class="form-control">'.format(val);
        }},
        {field:'aisle', title:'{0}'.format(MODEL.sensor.aisle), formatter: function(val) {
          var aislehtml = '<select id="aisletype" name="aisletype" style="width:100px;padding-top:4px;height:32px;vertical-align:middle;text-align:center;">';
          if (val==0) {
            aislehtml += '<option value=0 selected>Cold</option><option value=1>Hot</option>';
          } else if (val==1) {
            aislehtml += '<option value=0>Cold</option><option value=1 selected>Hot</option>';
          }
          aislehtml += '</select>';
          return aislehtml;
        }},
        {field:'null', formatter: function(val) {
          return '<button class="btn btn-primary">{0}</button>'.format(MODEL.buttons.save);
        }}
      ]];

      $gdSensor.datagrid({
        columns: cols,
        edit: true,
        singleSelect: true,
      });

      $gdSensor.datagrid("loadData", {rows: dataArr});

   
      $("#gdSensor button").click(function() {
        var $tr = $(this).closest("tr")
          , sensor =  $tr.find("input, select").inputToJSON()
          ;
        // console.log(sensoraisle);
        // var sensortypev;
        // if (sensor.sensortype=="Temperature (℃)") {
        //   sensortypev = 1;
        // } else if (sensor.sensortype=="Humidity (%)") {
        //   sensortypev = 2;
        // }
        var resetsensorJson = {
          "sensortype": sensor.type,
          "sensorname": sensor.sensorname,
          "sensoraisle": sensor.aisletype
        };
        

        if (sensor.sensorname.length > 16) {
          var msg = jQuery.validator.messages.maxlength(16)
          $.messager.alert(PINGSTATUS["3"], msg);
        } else {
          $.getJSON("private/sensor_set.json", resetsensorJson, function(data) {
            EL.UpdateStatus(data) && $.messager.alert(MODEL.buttons.info, MODEL.datetime.succ);
          });
        }
      });
    };

    var getSensorGrid = function() {
      $.ajax({
        url: "public/sensor.json",
        dataType: "json",
        success: setSensorGrid
      });
    };

    // Creating User and RoleinUser Grids.
    getSensorGrid();
    
    //Form validation
    //$tabCreateNewUser.mouseover(generateTooltips);
    var privilege = function() {
      $("#btnMainSubmit").hide();
      //EL.Privilege.setButton([$btnNewUser, $btnEditUser, $btnDeleteUser, $("#btnOk")], 0x00000020);
    };

    privilege();

  };

})();



