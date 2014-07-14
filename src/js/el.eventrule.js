(function() {

  var self = EL.EventRule = function() {
    var oldeventrule;
    var submitHandler = function() {
      // var eip = $("#eip_address").val();
      // var eport = $("#etrap_port").val();
      // var ecommstr = $("#ecommunity_str").val();
      // if (eip=="") eip = "0.0.0.0";
      // if (eport=="") eport = 162;
      // if (ecommstr=="") ecommstr = "public";

      var checkboxObj = $("#freventrl").find("input:checkbox[name=eventr]:checked");
      var eventV = 0;
      checkboxObj.each(function() {
        eventV = parseInt(this.value) | eventV;
      });
      console.log(eventV);
      oldeventrule == eventV ? $.messager.alert(MODEL.buttons.message, window.VALID.diffval) : updateSnmpPort(eventV);
      return false;
    };

    //Send data to the server in JSON format to Reset SNMP Event Rule.
    function updateSnmpPort(eventV) {
        var eventJson = {
          // "ipaddr":eip,
          // "port":eport,
          // "trapcom":ecommstr,
          "eventrule": eventV
        };
        $.ajax({
          url: "private/eventrule_set.json",
          data: eventJson,
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
    function generatelist () {     
      var eventHtml = '<div id="eventrldiv" style="border:solid 1px #086DE5;padding:15px;border-radius:10px;">';
      eventHtml += '<label id="spEventRule">'+MODEL.eventrl.spEventRule+'</label><br>';
      $.each(window.EVENTMAP, function(key,value){
        eventHtml += '<input type="checkbox" name="eventr" value='+key+'>&nbsp;&nbsp;';
        eventHtml +=  value;
        eventHtml += '</input><br>';
      });
      eventHtml += '</div>';
      $("#eventrule").html(eventHtml);
    }
    function loadEventInfo() {
      generatelist();
      
      $.ajax({
        type: "GET",
        url: "private/eventrule.json",
        // data: "{}",
        dataType : "json",
        success: function(data) {        
            // $("#eip_address").val(data.ipaddr);
            // $("#etrap_port").val(data.trapport);
            // $("#ecommunity_str").val(data.trapcommunity);
            var allcheckbox = $("#freventrl").find("input:checkbox[name=eventr]");
            var countchecked = 0;
            allcheckbox.each(function() {
              var checkedv = parseInt(data.eventrule) & parseInt(this.value);
              if (checkedv) {
                $("#freventrl").find("input:checkbox[value="+this.value+"]").attr("checked","true");
                countchecked++;
              }
            });
            if (countchecked==10) {
              $("#cbeaeventrl").attr("checked", true);
            }

            oldeventrule = data.eventrule;
        }
      });
    }
    function getSNMPPolicy() {
      loadEventInfo();
      var policy = {};
      $("#freventrl").validate({
        rules: {
          // eip_address: $.extend({ipv4: true}, policy),
          // etrap_port: $.extend({digits: true}, policy),
          // ecommunity_str: $.extend({maxlength: 16}, policy)
        },
        submitHandler: submitHandler
      });
    }

    getSNMPPolicy();

    $("#cbeaeventrl").click(function() {
      var eaeventrlV = $("#cbeaeventrl").is(':checked');
      if (eaeventrlV) {
        generatelist();
        $("#eventrldiv input:checkbox").attr("checked",true);
      } else {
        generatelist();
      }
    });

  };

}());