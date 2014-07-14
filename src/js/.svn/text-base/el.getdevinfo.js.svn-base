(function() {

  var self = EL.GetDevinfo = function() {

    $('#devinfotabs a').click(function (e) {
      e.preventDefault()
      $(this).tab('show')
    })


    var submitHandler = function() {
      getDevinfo();
    };

    //Get data from the server in JSON format to Devinfo.
    function getDevinfo() {
      var model = MODEL.devinfo;
      $.ajax({
        url: "private/devinfo.json",
        dataType : "json",
        success: function(data) {
          console.log(data);
          var url = window.location.href;
          var pduip = url.split('/')[2];
          $("#pduip").html(pduip);
          $("#serialnum").html(data.serialnumber);
          $("#firmversion").html(data.irmcfirmversion);
          $("#devmac").html(data.irmcmac);
          if (!data.result) {
            $(".sku1").show();
            $(".sku2").hide();
          } else {
            $(".sku2").show();
            $(".sku1").hide();

            // var outletStr = "<table class='outlet_content'>";
            // outletStr += "<tr id='head'><th style='width:200px;'>Label</th>";
            // outletStr += "<th style='width:400px;'>Operating Voltage</th>";
            // outletStr += "<th style='width:400px;'>Rated Current</th></tr>";
            // for (var i = 1; i <= 17; i++) {
            //   outletStr += "<tr><td>"+i+"</td><td>23A</td><td>230v</td></tr>";
            // };
            // outletStr +="</table>";
            // $("#dev_outlet_detail").html(outletStr);

            var cbStr = "<table class='table table-striped'>";
            cbStr += "<tr><th class='navbar-inverse' style='border-right:1px solid #CCCCCC;color:#FFFFFF;font-weight:400;height:24px;'>"+model.label+"</th>";
            cbStr += "<th class='navbar-inverse' style='border-right:1px solid #CCCCCC;color:#FFFFFF;font-weight:400;height:24px;'>"+model.type+"</th>";
            cbStr += "<th class='navbar-inverse' style='border-right:1px solid #CCCCCC;color:#FFFFFF;font-weight:400;height:24px;'>"+model.ratecurrent+"</th>";
            cbStr += "<th class='navbar-inverse' style='border-right:1px solid #CCCCCC;color:#FFFFFF;font-weight:400;height:24px;'>"+model.protoutlet+"</th></tr>";
            for (var i = 1; i <= 2; i++) {
              cbStr += "<tr><td>B"+i+"</td><td>1-Pole Circuit Breaker</td><td>16A</td><td>B"+i+"</td></tr>";
            };
            cbStr +="</table>";
            $("#dev_cb_detail").html(cbStr);
          }  
          // $("#webversion").html(data.webversion);     
        }
      });
    }

    function getDevinfoPolicy() {
        $("#btnMainSubmit").hide();
        submitHandler();
    }

    getDevinfoPolicy();
  };

}());

