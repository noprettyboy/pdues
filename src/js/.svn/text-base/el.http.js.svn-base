(function() {

  var self = EL.HttpSet = function() {
    var oldhttpport;
    var $http_result = $("#http_result");

    var submitHandler = function(form) {
      var httpport;
      httpport = $('#httpport').val();
      // updateHttpPort(httpport);
      httpport == oldhttpport ? $.messager.alert(MODEL.buttons.message, window.VALID.diffval) : updateHttpPort(httpport);
      return false;
    };

    //Send data to the server in JSON format to Reset Network IP.
    function updateHttpPort(httpport) {
      $.messager.confirm(MODEL.buttons.message, MODEL.netsvr.change, function () {
        var resethttpportJson = {
          "httpport": httpport
        };

        $.ajax({
          url: "private/networkservice.json",
          data: resethttpportJson,
          dataType : "json",
          success: function(data) {
            var newDJson = jQuery.parseJSON('{"result":0}');
            if (data["httpport"]==3) {
              newDJson = jQuery.parseJSON('{"result":3}');
            } else if (data["httpport"]!=3) {
              newDJson = jQuery.parseJSON('{"result":1}');
            }
            if (EL.UpdateStatus(newDJson)) {
              $('#mydialog').dialog('destroy');
              $('#mydialog').html('');

              var url  = location.host
                , idx  = url.indexOf(":")
                , ip   = url.substr(0, idx > 0 ? idx : url.length);

              // EL.ResetDev.count(10, "http://{0}:{1}".format(ip, httpport));          
              EL.ResetDev.reset(5, "http://{0}:{1}".format(ip, httpport));        
            }
          }
        });
      });
    }

    function loadHttpInfo() {
      $.ajax({
        type: "GET",
        url: "private/networkservice.json",
        // data: "{}",
        dataType : "json",
        success: function(data) {        
            $("#httpport").val(data.httpport);
            oldhttpport = data.httpport;
        }
      });
    }
    function getHttpPolicy() {
      loadHttpInfo();
      $('#httpport')
        .focus(function() {
          $http_result.hide();
        })
        .focus();
   
      var policy = {};
      $("#frhttp").validate({
        rules: {
          httpport: $.extend({required: true, digits: true, max: 65535}, policy)
        },
        submitHandler: submitHandler
      });
    }

    getHttpPolicy();

    //EL.Privilege.setButton([$("#btnMainSubmit")], 0x00000080);
  };

}());