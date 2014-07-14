/*User*/
(function() {

  EL.User = function() {

    var model = MODEL.users
      , $gdUser = $('#gdUser');

    var setUserGrid = function(rows) {
      var cols = [[
        // {field:'active', title: 'Active', width:90, align:"center", formatter: EL.Formatter.bool, sortable: true},
        //{field:'active', title: '{0}'.format(model.active), width:90, align:"center", formatter: EL.Formatter.bool, sortable: true},
        // {field:'username', title:'User Name', width:125, sortable: true},
        {field:'username', title:'{0}'.format(model.username), readonly: true},
        // {field:'fullname', title:'Full Name', width:125, sortable: true},
        {field:'password', title:'{0}'.format(model.password), formatter: function(val) {
          return '<input value="{0}" type="password" name="password" class="form-control">'.format(val);
        }},
        {field:'password', title:'{0}'.format(model.cfpassword), formatter: function(val) {
          return '<input value="{0}" type="password" name="cfpassword" class="form-control">'.format(val);
        }},
        {field:'null', formatter: function(val) {
          return '<button class="btn btn-primary">{0}</button>'.format(MODEL.buttons.save);
        }}
        //{field:'roles', title:'Roles', sortable: true, width:150, sortable: true}
        //{field:'roles', title:'{0}'.format(model.roles), sortable: true, width:150, sortable: true}
      ]];

      $gdUser.datagrid({
        columns: cols,
        edit: true,
        singleSelect: true,
      });

      $gdUser.datagrid("loadData", {rows: rows});

   
      $("#gdUser button").click(function() {
        var $tr = $(this).closest("tr")
          , user =  $tr.find("input").inputToJSON()
          ;

        if (!user.password || user.password.length < 4 || user.password.length > 10) {
          var msg = jQuery.validator.messages.minlength(4);
          user.password.length > 10 && (msg = jQuery.validator.messages.maxlength(10));
          $.messager.alert(PINGSTATUS["3"], msg);
        } else if (user.password != user.cfpassword) {
          $.messager.alert(PINGSTATUS["3"], jQuery.validator.messages.equalTo);
        } else {
          $.getJSON("private/user.json", user, function(data) {
            EL.Auth.username == user.username && EL.Auth.update(user.username, user.password);
            EL.UpdateStatus(data) && $.messager.alert(MODEL.buttons.info, MODEL.datetime.succ);
          });
        }
      });
    };

    var getUserGrid = function() {
      $.ajax({
        url: "private/users.json",
        dataType: "json",
        success: setUserGrid
      });
    };

    // Creating User and RoleinUser Grids.
    getUserGrid();
    
    //Form validation
    //$tabCreateNewUser.mouseover(generateTooltips);
    var privilege = function() {
      $("#btnMainSubmit").hide();
      //EL.Privilege.setButton([$btnNewUser, $btnEditUser, $btnDeleteUser, $("#btnOk")], 0x00000020);
    };

    privilege();

  };

})();



