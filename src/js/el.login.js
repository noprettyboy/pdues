EL.Login = function(model) {

  var $logform  = $("#frlogin")
    , $username = $("#username")
    , $password = $("#password")
    , $loginmsg = $("#loginmsg")
    ;

  $logform
    .submit(submitHandler)
    .validate({
      rules: {
        username: {
          required: true
          //, minlength: 3
        },
        password: {
          required: true
          //, minlength: 8
        }
      }
    });

  var loginHandler = function() {

    $("#mydialog").dialog("close");

    $("#login").dialog({
        title:    model.title
      , classed: "marked"
      , buttons: [
          {
              text: model.login
            , classed: "btn-primary"
            , click: function() {
                submitHandler();
              }
          }
        ]
    });
  }

  var submitHandler = function(e) {
    if (!$logform.valid()) {
      return false;
    }

    e && e.preventDefault();

    $.ajax({
        url: "public/login.json"
      , data: {username: $username.val(), password: $password.val()}
      , dataType: "json"
      , success: function(json) {
          if (json.result) {
            EL.Auth.update($username.val(), $password.val());
            $("#user").html(EL.Auth.username);
            $("#login").dialog("close");
            $("#wrapper").attr("style","display:inline;");
            EL.DashBoard.init();
          } else {
            var msg = model.authfail;
            $loginmsg
              .html(msg)
              .show();
          }
        }
      , error: function() {
          var msg = model.authfail;
          //req.status && (req.status != 401) && (msg = AJAXSTATUS[req.status]);
          req.status == 0 && (msg = model.connfail);

          $loginmsg
            .html(msg)
            .show();
        }
    });
  };

  loginHandler();

  //Press Enter to submit the form (fix for IE)
  function onKeyUp(e) {
    if (e.keyCode == 13) submitHandler();
  };
  $username.keyup(onKeyUp);
  $password.keyup(onKeyUp);

  //Prevent press F5
  $(document).keydown(function(e) {
    if (e.keyCode == 116) {
      e.preventDefault();
      $("#mydialog").dialog("close");
    }
  });
};