(function() {

  var ResetDev = EL.ResetDev = function() {

    var submitHandler = function(form) {
      $('#mydialog').dialog('destroy');
      $('#mydialog').html('');
      var user = $('div .navbar-fixed-bottom a span[id=user]').html();
      console.log(user);
      user == "admin" ? ResetDev.reset() : EL.UpdateStatus(jQuery.parseJSON('{"result":3}'));
    };

    function getNetworkCardPolicy() {
      $("#frresetdev").validate({
        rules: {
        },
        submitHandler: submitHandler
      });
    }

    getNetworkCardPolicy();

    //EL.Privilege.setButton([$("#btnMainSubmit")], 0x00000080);
  };


  /*
  * Define prototype of ResetDev
  * reset network card
  */
  ResetDev.reset = function(seconds, url) {
    $.ajax({
      url: "private/reset.json",
      dataType : "json",
      success: function(data) {
        // if (EL.UpdateStatus(data)) {
          ResetDev.count(seconds, url);
        // }
        //ResetDev.count(seconds);
      }
    });
    // ResetDev.count(seconds, url);
  };

  ResetDev.count = function(seconds, url) {
    $('#resetDeviceDialog').dialog({
        title:   MODEL.master.resetdevicedl.txt
      , classed: "noclosed"
    });

    seconds = seconds | 5;

    EL.DashBoard.stop();

    var countdown = function() {
      if (seconds-- < 1) {
        clearTimeout(window.countTimer);
        url ? (location.href = url) : location.reload();
      } else {
        $("#spSecondsAtResetDev").text(seconds)
      };
    };

    clearTimeout(window.countTimer);
    window.countTimer = setInterval(countdown, 1000);

    countdown();
  };

}());