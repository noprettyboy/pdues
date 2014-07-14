(function() {

  var self = EL.ChangePsw = function() {
    var $changepsw_result = $("#changepsw_result");

    var submitHandler = function(form) {
      var oldpassword, newPassword;
      oldpassword   = $('#txtOldpassword').val();
      newPassword   = $('#txtPassword').val();
      updateNewPassword(oldpassword, newPassword);
      return false;
    };

    //Send data to the server in JSON format to Change Password.
    function updateNewPassword(txtOldpassword, newPassword) {
      var model = MODEL.changepw;
      
      $.messager.confirm(MODEL.buttons.message, MODEL.changepw.confirminfo, function () {
        var changePasswordJson = {
            "username"    : EL.Auth.username
          , "oldpassword" : txtOldpassword
          , "newpassword" : newPassword
        };
        $.ajax({
          url: "private/password.json",
          data: changePasswordJson,
          dataType : "json",
          success: function(data) {
            if (EL.UpdateStatus(data)) {
              EL.Auth.update(EL.Auth.username, user.password);

              location.reload();
              // $('#mydialog').dialog('destroy');
              // $('#mydialog').html('');
            } else {
              $changepsw_result
                // .html('Change Password Failed.')
                .html(model.chgpwfail)
                .show();
            }
          }
        });
      });
    }

    function getPasswordPolicy() {
      $('#txtOldpassword')
        .focus(function() {
          $changepsw_result.hide();
        })
        .focus();

      var min     = 4
        , max     = 10
        , policy  = {}
        ;

      $("#frchangepw").validate({
        rules: {
          txtOldpassword: {required: true, oldpwd: true},
          txtPassword: $.extend({required: true, minlength: min, maxlength: max, notEqualTo:"#txtOldpassword"}, policy),
          txtConfirmPassword: $.extend({required: true, equalTo:"#txtPassword"}, policy)
        },
        submitHandler: submitHandler
      });
    }

    getPasswordPolicy();

    //EL.Privilege.setButton([$("#btnMainSubmit")], 0x00000080);
  };

}());
