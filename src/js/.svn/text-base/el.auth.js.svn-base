var EL = window.EL || {};

EL.Auth = (function() {

  var auth = {
      username: "",
      password: ""
    , update: function(username, password) {
        this.username = username;
        this.password = password;
        var token = Base64.encode(username + ":" + password);

        $.ajaxSetup({
          beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + token);       
          }
        });
      }
  };

  auth.getJSON = function() {

  };

  return auth;

})();


EL.UpdateStatus = function(data) {

  var result = parseInt(data["result"]);

  result == 3 && $.messager.alert(MODEL.buttons.message, MODEL.pdu.nopermission + UPDATESTATUS["0"]);
  //add by zzw begin
  result == 33033 && $.messager.alert(MODEL.buttons.message, MODEL.users.nopermission);
  //add by zzw end
  return result == 1;
};



