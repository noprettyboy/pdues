/*
Localizaton
*/
;(function(window) {

  var EL = window.EL || {};

  var self = EL.Locale = {};

  var localeCookie = "locale";

  self.bind = function() {
    var $sellocal = $("#sellocal>li")
      , local = $.cookie(localeCookie) || "en";

    $sellocal.click(function() {
      // EL.Master.mask(true);
      var $local  = $(this);

      local = $local.attr("name");
      $.cookie(localeCookie, local, {
        path:"/",
        expires: 730
      });

      $.get(
          "private/locale_set.json"
        , { locale: local }
        , function() {
            window.setTimeout(function() {
              location.reload();
            }, 200);
          }
      );

    });
  };

  //render the templates
  self.render = function() {
    //It's login page
    var $login = $("#login");
    if ($login.size()) {
      var model = MODEL.login;
      var pagefn = doT.template($login.html());
      $login.html(pagefn(model));

      EL.Login(model);
    }

    //It's master page
    var $wrapper = $("#wrapper");
    if ($wrapper.size()) {
      var model = MODEL.master;
      var pagefn = doT.template($wrapper.html());
      $wrapper.html(pagefn(model));

      EL.Master(model).init();
    }

    self.bind();
    //After language package loaded refresh the dashboards
    EL.DashBoard();
  };

  self.init = function() {
    var update = function() {
      var locale = $.cookie(localeCookie) || "en";

      //load language package: Model
      (locale == "en")
        ? self.render()
        : $LAB.script("js/locale.{0}.js".format(locale)).wait(self.render);
    };

    $.getJSON("public/locale.json", function(data) {
      $.cookie(localeCookie, data.locale, {
        path:"/",
        expires: 730
      });
      update();
    }).error(update);
  };

  self.init();

})(window);