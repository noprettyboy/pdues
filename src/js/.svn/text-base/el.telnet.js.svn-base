(function() {

  var self = EL.TelnetSet = function() {
    var oldtelport, oldtelstat;
    var $telnet_result = $("#telnet_result");

    var submitHandler = function(form) {
      var telnetport, chktelVal;
      telnetport = $('#telnetport').val();
      chktelVal = $('#chkEnableTelnet').is(':checked');
      if (chktelVal) {
        chktelVal = 1;
      } else {
        chktelVal = 0;
      }

      (oldtelport==telnetport && oldtelstat==chktelVal) ? $.messager.alert(MODEL.buttons.message, window.VALID.diffval) : updateTelnetPort(telnetport, chktelVal);
      return false;
    };

    //Send data to the server in JSON format to Reset Network IP.
    function updateTelnetPort(telnetport, chktelVal) {
      var resettelnetportJson = {
        "telnetport": telnetport,
        "telnetstat": chktelVal
      };
      var oldport = $("#telnetport_h").val();
      if (oldport == telnetport) {
        $.ajax({
          url: "private/networkservice.json",
          data: resettelnetportJson,
          dataType : "json",
          success: function(data) {
            var newDJson = jQuery.parseJSON('{"result":0}');
            if ((data["telnetstat"]==3)||(data["telnetport"]==3)) {
              newDJson = jQuery.parseJSON('{"result":3}');
            } else if ((data["telnetstat"]!=3)&&(data["telnetport"]!=3)) {
              newDJson = jQuery.parseJSON('{"result":1}');
            }
            if (EL.UpdateStatus(newDJson)) {
              $('#mydialog').dialog('destroy');
              $('#mydialog').html('');
              $.messager.alert(MODEL.buttons.message, MODEL.pdu.resetsuccess);
            }
          }
        });
      } else {
        $.messager.confirm(MODEL.buttons.message, MODEL.forcehttpinfo.confirminfo, function () {
          $.ajax({
            url: "private/networkservice.json",
            data: resettelnetportJson,
            dataType : "json",
            success: function(data) {
              var newDJson = jQuery.parseJSON('{"result":0}');
              if ((data["telnetstat"]==3)||(data["telnetport"]==3)) {
                newDJson = jQuery.parseJSON('{"result":3}');
              }
              if (EL.UpdateStatus(newDJson)) {
                $('#mydialog').dialog('destroy');
                $('#mydialog').html('');
                EL.ResetDev.reset();
              }
            }
          });
        });
      }
    }

    function loadTelnetInfo() {
      $.ajax({
        type: "GET",
        url: "private/networkservice.json",
        data: "{}",
        dataType : "json",
        success: function(data) {        
            $("#telnetport").val(data.telnetport);
            $("#telnetport_h").val(data.telnetport);
            if (data.telnetstat) {
              $("#chkEnableTelnet").attr('checked', true);
            }   

            oldtelport = data.telnetport;
            oldtelstat = data.telnetstat;   
        }
      });
    }
    function getTelnetPolicy() {
      loadTelnetInfo();
      $('#telnetport')
        .focus(function() {
          $telnet_result.hide();
        })
        .focus();
   
      var policy = {};
      $("#frtelnet").validate({
        rules: {
          telnetport: $.extend({required: true, digits: true, max: 65535}, policy)
        },
        submitHandler: submitHandler
      });
    }

    getTelnetPolicy();

    //EL.Privilege.setButton([$("#btnMainSubmit")], 0x00000080);
  };

}());