(function() {

  var self = EL.SNMPSet = function() {
    var oldgrcom, oldgwcom, oldtip, oldtport, oldcom;
    //Send data to the server in JSON format to Reset SNMP Event Rule.
    function submitHandler() {        
      if (oldgrcom==$("#snmp_rcomm").val() && oldgwcom==$("#snmp_wcomm").val() && oldtip==$("#eip_address").val() && oldtport==$("#etrap_port").val() && oldcom==$("#ecommunity_str").val()) {
        $.messager.alert(MODEL.buttons.message, window.VALID.diffval);
      } else {
        $.ajax({
          url: "private/snmp_set.json",
          data: $("#formsnmp input").inputToJSON(),
          dataType : "json",
          success: function(data) {
            if (EL.UpdateStatus(data)) {
              $('#mydialog').dialog('destroy');
              $('#mydialog').html(''); 
              $.messager.alert(MODEL.buttons.message, MODEL.pdu.resetsuccess);       
            }
          }
        });
      }
    }

    function getSNMPolicy() {
      var policy = {};
      $("#formsnmp").validate({
        ignore:"",
        rules: {
          snmp_rcomm: $.extend({required:true, minlength:4, maxlength: 16}, policy),
          snmp_wcomm: $.extend({required:true, minlength:4, maxlength: 16}, policy),
          eip_address: $.extend({required:true, ipv4: true}, policy),
          etrap_port: $.extend({required:true, digits: true, max: 65535}, policy),
          ecommunity_str: $.extend({required:true, minlength:4, maxlength: 16}, policy)
        },
        submitHandler: submitHandler
      });    
    }

    function loadSNMPInfo() {
      $.ajax({
        type: "GET",
        url: "private/snmp.json",
        // data: "{}",
        dataType : "json",
        success: function(data) {
          getSNMPolicy();

          $("#snmp_rcomm").val(data.snmpreadcommunity);
          $("#snmp_wcomm").val(data.snmpwritecommunity);

          $("#eip_address").val(data.ipaddr);
          $("#etrap_port").val(data.trapport);
          $("#ecommunity_str").val(data.trapcommunity);

          oldgrcom = data.snmpreadcommunity;
          oldgwcom = data.snmpwritecommunity;

          oldtip = data.ipaddr; 
          oldtport = data.trapport;
          oldcom = data.trapcommunity;
        }
      });
    }

    loadSNMPInfo();
  };

}());