(function() {

  var self = EL.PduInfoSet = function() {
    var oldpdunm, oldpdulc;
    // var $datalog_result = $("#datalog_result");

    var submitHandler = function(form) {
      var pduname, pdulocation;
      pduname = $('#dlpduname').val();
      pdulocation = $('#dlpdulocation').val();
      
      (oldpdunm==pduname && oldpdulc==pdulocation) ? $.messager.alert(MODEL.buttons.message, window.VALID.diffval) : updatePduInfoSet(pduname, pdulocation);
      return false;
    };

    //Send data to the server in JSON format to Reset Network IP.
    function updatePduInfoSet(pduname, pdulocation) {
        // var model = MODEL.datalog;
        var resetpduinfoJson = {
          "irmc_name": pduname,
          "irmc_location": pdulocation
        };
        $.ajax({
          url: "private/irmc_set.json",
          data: resetpduinfoJson,
          dataType : "json",
          success: function(data) { 
            if (EL.UpdateStatus(data)) {   
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

    function loadPduInfo() {
      $.ajax({
        type: "GET",
        url: "private/irmc.json",
        // data: "{}",
        dataType : "json",
        success: function(data) {        
          $("#dlpduname").val(data.name);
          $("#dlpdulocation").val(data.location);

          oldpdunm = data.name;
          oldpdulc = data.location;
        }
      });
    }
    function getPduInfoPolicy() {
      loadPduInfo();
      // $('#dlinterval')
      //   .focus(function() {
      //     $datalog_result.hide();
      //   })
      //   .focus();
   
      var policy = {};
      $("#frpduinfo").validate({
        rules: {
          dlpduname: $.extend({maxlength: 32}, policy),
          dlpdulocation: $.extend({maxlength: 32}, policy)
        },
        submitHandler: submitHandler
      });
    }

    getPduInfoPolicy();

    //EL.Privilege.setButton([$("#btnMainSubmit")], 0x00000080);
  };

}());