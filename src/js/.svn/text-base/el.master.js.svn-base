EL.Master = function(model) {

  var master = {};

  var model = MODEL.buttons;

  master.init = function() {
    $("#menuDashboard").text(EL.TreeRoot.text);
    $("#menuSetting").text(MODEL.users.setting);
    $("#alarmstitle").text(MODEL.dashboard.alarms);
    $("#pdupowerenergy").text(MODEL.dashboard.pdupowerenergy);
    $("#currentrms,#currentrms2").text(MODEL.dashboard.currentrms);
    $("#voltagerms").text(MODEL.dashboard.voltagerms);
    $("#voltenergy").text(MODEL.dashboard.voltenergy);
    $("#externalsensor").text(MODEL.dashboard.externalsensor);

    $("#settings li>a").click(function() {
      var $link = $(this)
        , $item = $link.closest("li")
        , name  = $item.attr("name")
        , title = $item.attr("title")
        , $tmpl = $("#" + name)
        ;

      //modify by zzw begin
      var opendialog = function () {
        if ($tmpl.size() < 1) return;
        $('<div id="mydialog"></div>').dialog({ 
            title: title
          , classed: "noclosed"
          , buttons: [
              {
                  text: "&nbsp;&nbsp;&nbsp;&nbsp;" + model.oks + "&nbsp;&nbsp&nbsp;&nbsp;"
                , id:   "btnMainSubmit"
                , classed: "btn-primary"
                , click: function() {
                    $("#mydialog form").submit();
                  }
              },
              {
                  text: model.cancels
                , id:   "btnCancel"
                , classed: "btn-primary"
                , click: function() {
                    $(this).dialog("destroy");
                    $("#mydialog").remove();
                  }
              }
            ]
        });

        var render = function() {
          var html      = $tmpl.html()
            , htmlModel = MODEL[name]
            , pagefn    = doT.template(html);

          $("#mydialog").append(pagefn(htmlModel));
        };

        render();
      };
      if ("users" == name) {
        var curusernm = EL.Auth.username;
        if ("admin" == curusernm) {
          opendialog();
        } else {
          var newDJson = jQuery.parseJSON('{"result":33033}');
          EL.UpdateStatus(newDJson);
        }
      } else {
        opendialog();
      }
      //modify by zzw end

      // if ($tmpl.size() < 1) return;


      // $('<div id="mydialog"></div>').dialog({ 
      //     title: title
      //   , classed: "noclosed"
      //   , buttons: [
      //       {
      //           text: "&nbsp;&nbsp;&nbsp;&nbsp;" + model.oks + "&nbsp;&nbsp&nbsp;&nbsp;"
      //         , id:   "btnMainSubmit"
      //         , classed: "btn-primary"
      //         , click: function() {
      //             $("#mydialog form").submit();
      //           }
      //       },
      //       {
      //           text: model.cancels
      //         , id:   "btnCancel"
      //         , classed: "btn-primary"
      //         , click: function() {
      //             $(this).dialog("destroy");
      //             $("#mydialog").remove();
      //           }
      //       }
      //     ]
      // });

      // var render = function() {
      //   var html      = $tmpl.html()
      //     , htmlModel = MODEL[name]
      //     , pagefn    = doT.template(html);

      //   $("#mydialog").append(pagefn(htmlModel));
      // };

      // render();
    });

    $("#logout").click(function() {
      location.reload();
    });

    EL.SetAlarm();
  };

  return master;
};