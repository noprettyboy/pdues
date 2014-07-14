(function() {

  var self = EL.ResetNetwork = function() {
    var olddhcp, oldipaddr, oldmask, oldgate;
    var $resetnetwork_result = $("#resetnetwork_result");

    var submitHandler = function(form) {
      var dhcp_value,ip_address,net_mask,gate_way;
      var dhcpV = $("#cbdhcp").is(':checked');
      if (dhcpV) {
        dhcp_value = 1;
      } else {
        dhcp_value = 0;
      }
      ip_address = $('#ip_address').val();
      net_mask = $('#net_mask').val();
      gate_way = $('#gate_way').val();
      if (olddhcp==dhcp_value && oldipaddr==ip_address && oldmask==net_mask && oldgate==gate_way) {
        $.messager.alert(MODEL.buttons.message, window.VALID.diffval);
      } else {
        updateNetworkIP(dhcp_value, ip_address, net_mask, gate_way);
      }
      
      return false;
    };

    //Send data to the server in JSON format to Reset Network IP.
    function updateNetworkIP(dhcp_value, ip_address, net_mask, gate_way) {
      $.messager.confirm(MODEL.buttons.message, MODEL.forcehttpinfo.confirminfo, function () {
        // var model = MODEL.network;
        var resetnetworkIPJson = {
          "dhcp": dhcp_value,
          "ipaddr": ip_address,
          "netmask": net_mask,
          "gateway": gate_way
        };

        $.ajax({
          url: "private/ipaddr_set.json",
          data: resetnetworkIPJson,
          dataType : "json",
          success: function(data) {
            if (EL.UpdateStatus(data)) {
              $('#mydialog').dialog('destroy');
              $('#mydialog').html('');
              // EL.ResetDev.count(10, "http://" + ip_address);
              EL.ResetDev.reset(5, "http://" + ip_address);
            }
          }
        });
      });
    }

    function loadNetworkIPInfo() {
      $.ajax({
        type: "GET",
        url: "private/ipaddr.json",
        // data: "{}",
        dataType : "json",
        success: function(data) { 
          var ipstr16 = parseInt(data.ipaddr, 10).toString(16);
          var ipstr = parseInt(ipstr16.substr(0,2),16).toString(10)
                    +"."+ parseInt(ipstr16.substr(2,2),16).toString(10)
                    +"."+ parseInt(ipstr16.substr(4,2),16).toString(10)
                    +"."+ parseInt(ipstr16.substr(6,2),16).toString(10);
          
          var netmkstr16 = parseInt(data.netmask, 10).toString(16);
          var netmkstr = parseInt(netmkstr16.substr(0,2),16).toString(10)
                    +"."+ parseInt(netmkstr16.substr(2,2),16).toString(10)
                    +"."+ parseInt(netmkstr16.substr(4,2),16).toString(10)
                    +"."+ parseInt(netmkstr16.substr(6,2),16).toString(10);
          
          var gtwaystr16 = parseInt(data.gateway, 10).toString(16);
          var gtwaystr = parseInt(gtwaystr16.substr(0,2),16).toString(10)
                    +"."+ parseInt(gtwaystr16.substr(2,2),16).toString(10)
                    +"."+ parseInt(gtwaystr16.substr(4,2),16).toString(10)
                    +"."+ parseInt(gtwaystr16.substr(6,2),16).toString(10);
          
          console.log(ipstr);console.log(netmkstr);console.log(gtwaystr);
          $("#ip_address").val(ipstr);
          $("#net_mask").val(netmkstr);
          $("#gate_way").val(gtwaystr);  
          if (data.dhcp) {
            $("#cbdhcp").attr('checked', true);
            $("#staticip").find("input").attr("disabled", "disabled");
          } 
          olddhcp = data.dhcp;
          oldipaddr = ipstr;
          oldmask = netmkstr;
          oldgate = gtwaystr;  
        }
      });
    }
    function getNetworkIPPolicy() {
      // $('#ip_address')
      //   .focus(function() {
      //     $resetnetwork_result.hide();
      //   })
      //   .focus();
      loadNetworkIPInfo();
  
      var policy = {};
      var dhcpV = $("#cbdhcp").is(':checked');
      if (dhcpV) {
        $("#frresetnetwork").validate({
        rules: {
        },
        submitHandler: submitHandler
      });
      } else {
        $("#frresetnetwork").validate({
        rules: {
          ip_address: $.extend({required: true, ipv4: true}, policy),
          net_mask: $.extend({required: true, ipv4: true}, policy),
          gate_way: $.extend({required: true, ipv4: true}, policy)
        },
        submitHandler: submitHandler
      });
      }
    }

    getNetworkIPPolicy();

    $("#cbdhcp").click(function() {
      var dhcpV = $("#cbdhcp").is(':checked');
      if (dhcpV) {
        $("#staticip").find("input").attr("disabled", "disabled");
      } else {
        $("#staticip").find("input").removeAttr("disabled");
      }
    });

    //EL.Privilege.setButton([$("#btnMainSubmit")], 0x00000080);
  };

}());