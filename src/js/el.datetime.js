(function() {
  var oldutc, olddatetime;
  var self = EL.DateTime = function() {
    EL.DateTime.addUtcList();
    var $timezoneselect = $("#utcselect");
    var $datetimeInput = $("#datetimeInput");

    // $("#datetimepicker1").datetimepicker();

    //Send data to the server in JSON format to Reset DateTime.
    function getDatetime() {
      $.getJSON("private/datetime.json", function(data) {
        // var datetime = self.getDate(data.datetime);
        // $datetimeInput.val(self.formatDate(datetime));
        // alert(data.datetime);
        $datetimeInput.val(data.datetime);
        $timezoneselect.val(data.timezone);

        oldutc = data.timezone;
        olddatetime = data.datetime;
      });
    }

    function submitHandler() {
      // e.preventDefault();
      // var datetime = new Date($("#datetimeInput").val());
      var datetimestr = $("#datetimeInput").val();
      var datetimearr = datetimestr.split(" ");
      // console.log(datetimearr);
      var timezone = $timezoneselect.val();
      // console.log(EL.DateTime.getValue(datetime));
      if (oldutc==timezone && olddatetime==datetimestr) {
        $.messager.alert(MODEL.buttons.message, window.VALID.diffval);
      } else {
        var resetdatetimeJson = {
          "date": datetimearr[0],
          "time": datetimearr[1]
          // "datetime": EL.DateTime.getValue(datetime) <0 ? EL.DateTime.getValue(datetime)>>>0 : EL.DateTime.getValue(datetime)
        };
        var resettimezoneJson = {
          "timezone": timezone
        };

        $.ajax({
          url: "private/timezone_set.json",
          data: resettimezoneJson,
          dataType : "json",
          success: function(data) {
            $.ajax({
              url: "private/datetime_set.json",
              data: resetdatetimeJson,
              dataType : "json",
              success: function(data) {               
                if (EL.UpdateStatus(data)) {
                  $('#mydialog').dialog('destroy');
                  $('#mydialog').html('');
                  EL.DashBoard.setInitTimer();
                  $.messager.alert(MODEL.buttons.message, MODEL.pdu.resetsuccess);
                }
              }
            });
          }
        });
      }
      

      // $.ajax({
      //   url: "private/datetime_set.json",
      //   data: resetdatetimeJson,
      //   dataType : "json",
      //   success: function(data) {
      //     if (EL.UpdateStatus(data)) {
      //       $('#mydialog').dialog('destroy');
      //       $('#mydialog').html('');
      //       EL.DashBoard.setInitTimer();
      //     }
      //   }
      // });
    };

    function getDatetimePolicy() {
      getDatetime();
      var policy = {};
      // $("#frdatetime")
      //   .submit(submitHandler)
      //   .validate({
      //     rules: {
      //       // httpport: $.extend({required: true, dateime: true}, policy)
      //       datetimeInput: {required: true, dateime: true}
      //     }
      //   });

      $("#frdatetime").validate({
        rules: {
          // datetimeInput: {required: true, datetime: true}
          datetimeInput: $.extend({required: true, dtvalue: true}, policy)
        },
        submitHandler: submitHandler
      });
    }

    getDatetimePolicy();
  };

  self.getValue = function(dateVal) {
    var d = new Date(dateVal);
    return (d.getYear() - 100) << 26 | (d.getMonth() + 1) << 22 | d.getDate() << 17 | d.getHours() << 12 | d.getMinutes() << 6 | d.getSeconds()
  };

  self.getDate = function(intVal) {
    var d = new Date();
    d.setFullYear((intVal >> 26) + 2000, (intVal >> 22 & 15) - 1, intVal >> 17 & 31); //7, 4 , 5
    d.setHours(intVal >> 12 & 31, intVal >> 6 & 63, intVal & 63) //5, 6, 6
    return d;
  };

  self.formatDate = function(m) {

    var dateString = m.getFullYear() +"/"+
      ("0" + (m.getMonth()+1)).slice(-2) +"/"+
      ("0" + m.getDate()).slice(-2) + " " +
      ("0" + m.getHours()).slice(-2) + ":" +
      ("0" + m.getMinutes()).slice(-2) + ":" +
      ("0" + m.getSeconds()).slice(-2);

    return dateString;
  };

  //add by zzw begin
  self.addUtcList = function() {
    var utclisthtml = '<select id="utcselect" style="width:540px;padding-top:4px;height:32px;vertical-align:middle;">';
    for (var i = -12; i < 0; i++) {
      utclisthtml += '<option value="'+i+'">'+i+'</option>';
    };
    utclisthtml += '<option value="0">0</option>';
    for (var i = 1; i < 14; i++) {
      utclisthtml += '<option value="+'+i+'">+'+i+'</option>';
    };
    utclisthtml += '</select>';
    $("#listUTC").html(utclisthtml);
  }
  //add by zzw end
  // self.UpdateStatus = function(data) {

  //   var result = parseInt(data["result"]);

  //   result == 3 && $.messager.alert(MODEL.pdu.nopermission + UPDATESTATUS["0"]);
  //   //add by zzw begin
  //   result == 33033 && $.messager.alert(MODEL.users.nopermission);
  //   //add by zzw end
  //   return result == 1;
  // };

}());

