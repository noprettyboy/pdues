(function() {
  var oldinterval, oldenable;
  var self = EL.DatalogSet = function() {
    var $datalog_result = $("#datalog_result");

    var submitHandler = function(form) {
      var interval, datalogenable;
      interval = $('#dlinterval').val();
      datalogenable = $('#chkEnableDatalog').is(':checked');
      if (datalogenable) {
        datalogenable = 1;
      } else {
        datalogenable = 0;
      }
      (oldinterval==interval && oldenable==datalogenable) ? $.messager.alert(MODEL.buttons.message, window.VALID.diffval) : updateDatalogSet(interval, datalogenable);
      return false;
    };

    //Send data to the server in JSON format to Reset Network IP.
    function updateDatalogSet(interval, datalogenable) {
        var model = MODEL.datalog;
        var resetdatalogJson = {
          "interval": interval,
          "state": datalogenable
        };
        $.ajax({
          url: "private/datalog.json",
          data: resetdatalogJson,
          dataType : "json",
          success: function(data) { 
            var newDJson = jQuery.parseJSON('{"result":0}');
            if (data["interval"]==3 || data["datalogenable"]==3) {
              newDJson = jQuery.parseJSON('{"result":3}');
            } else if (data["interval"]!=3 && data["datalogenable"]!=3) {
              newDJson = jQuery.parseJSON('{"result":1}');
            }
            // console.log(newDJson);
            // console.log(EL.UpdateStatus(newDJson));
            if (EL.UpdateStatus(newDJson)) {   
              $('#mydialog').dialog('destroy');
              $('#mydialog').html('');
              $.messager.alert(MODEL.buttons.message, MODEL.pdu.resetsuccess);
              // var url = window.location.href;
              // var pduip = url.split('/')[2];
              // EL.ResetDev.count(10, "http://" + pduip);
              // EL.ResetDev.reset();
            }
          }
        });
    }

    function loadDatalogInfo() {
      $.ajax({
        type: "GET",
        url: "private/datalog.json",
        // data: "{}",
        dataType : "json",
        success: function(data) {        
          $("#dlinterval").val(data.interval);
          if (data.datalogenable) {
            $("#chkEnableDatalog").attr('checked', true);
          }

          oldinterval = data.interval; 
          oldenable = data.datalogenable;
        }
      });
    }
    function getDatalogPolicy() {
      loadDatalogInfo();
      $('#dlinterval')
        .focus(function() {
          $datalog_result.hide();
        })
        .focus();
   
      var policy = {};
      $("#frdatalog").validate({
        rules: {
          dlinterval: $.extend({required: true, numberChar: true, min: 1, max: 1440}, policy)
        },
        submitHandler: submitHandler
      });
    }

    getDatalogPolicy();

    //EL.Privilege.setButton([$("#btnMainSubmit")], 0x00000080);
  };

}());