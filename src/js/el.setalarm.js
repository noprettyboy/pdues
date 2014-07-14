/*
switch checkbox, when cbcheckboxname is checked, 
find the input field with checkboxname reset it
*/
(function($) {

  $.fn.switchCheckBox = function(isChecked) {


    var resetStatus = function($checkbox, diable) {
      var $form = $checkbox.closest("form"),
          name = $checkbox.attr("name").substr(2),
          $input = $('*[name="' + name  + '"]', $form);

      if (diable) {
        $checkbox[0].checked = true;
        $input
          .removeAttr("disabled")
          .removeAttr("readonly")
          .removeClass("disable")
          ;
      } else {
        $checkbox[0].checked = false;
        $input
          .attr("disabled", true)
          .attr("readonly", "readonly")
          .addClass("disable")
          ;
      }
    };

    /*
    checked means enable;
    uncheck mean disable;
    */
    var switchHandler = function(e) {
      var $checkbox = $(this),
          checked = ($checkbox.is(":checked"));

      resetStatus($checkbox, checked);
    };

    return this.each(function() {
      var $checkbox = $(this);

      if (typeof isChecked != undefined) {
        resetStatus($checkbox, isChecked);
      }

      $checkbox.on("change", switchHandler);
    });
  };

})(jQuery);

(function(window, document) {

  var self = EL.SetAlarm = function() {
    var model   = MODEL.buttons;
    var modelmt = MODEL.master;

    var $settingDialog,
        settingDialogHtml = $("#setalarmdialog").parent().html(),
        validator, min, max;

    self.init = function() {
      //recreate the dialog again;
      $("#setalarmdialog").remove();
      $settingDialog = $(settingDialogHtml);
      $(document.body).append($settingDialog);

      //toggle the disable status on the checkbox.
      //$("input.switch").switchCheckBox();
    };

    self.close = function() {
      $settingDialog.dialog("close");
    };

    /*
    alarm setting: public method exposed to external applications
    etc:
    urlPrefix: ajax request to get/set the value;
    params: { pduid:pduid, sensorid:sensorid }
    type: unit fix, etc: A, V, VA, W
    */
    self.setAlarm = function(urlPrefix, params, unit, title) {
      self.init();

      var type = ALARMUNITTYPE[unit] || { title:"" },
          //default sensor is temp
          sensortype = params["sensortype"];

      var $abound  = $("#abound", $settingDialog),
          $aswitch = $("#aswitch", $settingDialog),
          $aenable = $("#aenable", $settingDialog);

      //Unit defined? It needs bound panel;
      if (unit) {
        $abound.show();
        $aswitch.hide();
        $aenable.hide();

      //Unit not defined, depends on the sensor type, sensor type: 1,2 must have unit value, so ignore them;
      } else {
        switch (sensortype) {
          case 3:
          case 4:
            $abound.hide();
            $aswitch.show();
            $aenable.hide();
            break;
          case 5:
          case 6:
          case 7:
          case 8:
            $abound.hide();
            $aswitch.hide();
            $aenable.show();
            break;
        }
      }

      min = params["min"] || type["min"] || 0,
      max = params["max"] || type["max"] || 10000000000;

      delete params.min;
      delete params.max;
      delete params.sensortype;

      var unitTxt = type["unit"] || unit || " ",
          factor = type["factor"] || 1,
          fixed = type["fixed"] || 0;

      title = title || type["title"];

      //set alarm validate
      validator = self.setAlarmValidate(unit, urlPrefix);
      // console.log(validator);
      //add unit
      $(".unit", $settingDialog).html(unitTxt);


      var token = params;

      /*
      data postback will be like this:
      {
        "cblowcritical": 1,    //1: disable   0: enable
        "lowcritical": 10,
        "cblowwarning": 1,
        "lowwarning": 10,
        "cbupwarning": 0,
        "upwarning": 20,
        "cbupcritical": 0,
        "upcritical": 30,
        "threshold": 8,
        "delay": 10
      }
      */
      var getAlarmHandler = function(data) {
        // var model   = MODEL.buttons;
        // var modelmt = MODEL.master;
        console.log(urlPrefix);
        validator.resetForm();

        for(key in data) {
          if (urlPrefix=="sensor1" || urlPrefix=="sensor2" || urlPrefix=="sensor3") {
            var val = data[key];
          } else {
            var val = data[key]/1000;
          }
          
          var $input = $('[name="' + key + '"]', $settingDialog);
          console.log(val);
          if ($input.size()) {
            if ($input.attr("type") == "checkbox") {
              $input.switchCheckBox(!val);
            } else {
              if (key == "delay") {
                $input.val( val );
              } else {
                $input[0].value = val==0 ? "" : (val/factor).toFixed(fixed);
                // $input[0].value = (val / factor).toFixed(fixed);
                //$input.val((val / factor).toFixed(fixed));
              }
            }
          }

        }

        $settingDialog.dialog({
          // title:  '<h4>' + title + ' Alarm Setting</h4>',alarmsetting
          title:  '<h4>{0} {1}</h4>'.format(title, modelmt.setalarmdl.alarmsetting),
          buttons: {
            "Save" : {
              text: model.save,
              classed: "btn-primary",
              click: function(){setAlarmHandler();},
              id: "btnSave"
            },
            "Cancel" : {
              text: model.cancels,
              classed: "btn-primary",
              click: function(){self.close();},
              id: "btnClose"
            }
          }
        });
      };

      var setAlarmHandler = function(e) {
        console.log('zzw');
        var v1,v2,v3,v4,v;
        v1 = !$("#upcritical").val()?0:$("#upcritical").val();
        v2 = !$("#upwarning").val()?0:$("#upwarning").val();
        v3 = !$("#lowwarning").val()?0:$("#lowwarning").val();
        v4 = !$("#lowcritical").val()?0:$("#lowcritical").val();
        v = parseInt(v1) + parseInt(v2) + parseInt(v3) + parseInt(v4);
        console.log('v:'+v);
        if (v) {
          if (!$("form", $settingDialog).valid()) {
            return false;
          }
        }
        
        $.ajax({
          url: "private/" + urlPrefix + "_set.json",
          data: {
              uc: (urlPrefix=="sensor1"||urlPrefix=="sensor2"||urlPrefix=="sensor3")?$("#upcritical").val():$("#upcritical").val()*1000
            , uw: (urlPrefix=="sensor1"||urlPrefix=="sensor2"||urlPrefix=="sensor3")?$("#upwarning").val():$("#upwarning").val()*1000
            , lw: (urlPrefix=="sensor1"||urlPrefix=="sensor2"||urlPrefix=="sensor3")?$("#lowwarning").val():$("#lowwarning").val()*1000
            , lc: (urlPrefix=="sensor1"||urlPrefix=="sensor2"||urlPrefix=="sensor3")?$("#lowcritical").val():$("#lowcritical").val()*1000
          },
          dataType: "json",
          success: function(status) {
            if (EL.UpdateStatus(status)) {
              (!status.result) && $.messager.alert(modelmt.setalarmdl.updatefail);
              self.close();
            }
          },
          error: function() {
            console.log(arguments);
          }
        });

        return;


        //clone a new json data
        var saveData = $.extend({}, token);

        $("input:visible, select:visible", $settingDialog).each(function() {
          var $input = $(this),
              name = $input.attr("name");
              val = Number($input.val());

          (name != "delay") && (val *= factor);

          if ($input.attr("type") == "checkbox") {
            val = ($input.is(":checked") ? 0 : 1);
          }

          saveData[name] = val;
          
        });

        $.ajax({
          url: "private/" + urlPrefix + "_set.json",
          data: saveData,
          dataType: "json",
          success: function(status) {
            (!status.result) && $.messager.alert(modelmt.setalarmdl.updatefail);
            self.close();
          },
          error: function() {
            console.log(arguments);
          }
        });

      };

      $.ajax({
        url: "private/" + urlPrefix + ".json",
        data: token,
        dataType: "json",
        success: getAlarmHandler,
        error: function() {
          console.log(arguments);
        }
      });
    };

    /*
    Set validation on alarm dialog
    */
    self.setAlarmValidate = function(unit, urlPrefix) {
      console.log('validate');
      // console.log(urlPrefix);
      // console.log(window.devtypeinfo);
      var PDUtype = window.devtypeinfo;
      console.log(PDUtype);
      var phasetype = window.phasetypeinfo;
      var rules;
      var rules2 = {};
      switch(urlPrefix){
        case "alarml1" : 
          rules = {
              upcritical: { digits: true, min: 0, max: PDUtype==0?16:32, greaterThanCU: "#upwarning" }
            , upwarning: { digits: true, min: 0, max: PDUtype==0?16:32, greaterThanCM: "#lowwarning" }
            , lowwarning: { digits: true, min: 0, max: PDUtype==0?16:32, greaterThanCD: "#lowcritical" }
            , lowcritical: { digits: true, min: 0, max: PDUtype==0?16:32 }
          };
          break;
        case "alarmcb1" : 
          rules = {
              upcritical: { digits: true, min: 0, max: 16, greaterThanCU: "#upwarning" }
            , upwarning: { digits: true, min: 0, max: 16, greaterThanCM: "#lowwarning" }
            , lowwarning: { digits: true, min: 0, max: 16, greaterThanCD: "#lowcritical" }
            , lowcritical: { digits: true, min: 0, max: 16 }
          };
          break;
        case "alarmcb2" : 
          rules = {
              upcritical: { digits: true, min: 0, max: 16, greaterThanCU: "#upwarning" }
            , upwarning: { digits: true, min: 0, max: 16, greaterThanCM: "#lowwarning" }
            , lowwarning: { digits: true, min: 0, max: 16, greaterThanCD: "#lowcritical" }
            , lowcritical: { digits: true, min: 0, max: 16 }
          };
          break;
        case "alarmvoltage" : 
          rules = {
              upcritical: { digits: true, min: 90, max: 260, greaterThanVU: "#upwarning" }
            , upwarning: { digits: true, min: 90, max: 260, greaterThanVM: "#lowwarning" }
            , lowwarning: { digits: true, min: 90, max: 260, greaterThanVD: "#lowcritical" }
            , lowcritical: { digits: true,min: 90, max: 260 }
          };
          break;
        case "alarmpower" : 
          rules = {
              upcritical: { digits: true, min:0, max:260*(PDUtype==0?16:32)*phasetype, greaterThanPU: "#upwarning" }
            , upwarning: { digits: true, min:0, max:260*(PDUtype==0?16:32)*phasetype, greaterThanPM: "#lowwarning" }
            , lowwarning: { digits: true, min:0, max:260*(PDUtype==0?16:32)*phasetype, greaterThanPD: "#lowcritical" }
            , lowcritical: { digits: true, min:0, max:260*(PDUtype==0?16:32)*phasetype }
          };
          break;
        case "sensor1" : 
          rules = {
              upcritical: { digits: true, min: 0, max: 75, greaterThanEUT: "#upwarning" }
            , upwarning: { digits: true, min: 0, max: 75, greaterThanEMT: "#lowwarning" }
            , lowwarning: { digits: true, min: 0, max: 75, greaterThanEDT: "#lowcritical" }
            , lowcritical: { digits: true,min: 0, max: 75 }
          };
          break;
        case "sensor2" : 
          rules = {
              upcritical: { digits: true, min: 15, max: 90, greaterThanEUH: "#upwarning" }
            , upwarning: { digits: true, min: 15, max: 90, greaterThanEMH: "#lowwarning" }
            , lowwarning: { digits: true, min: 15, max: 90, greaterThanEDH: "#lowcritical" }
            , lowcritical: { digits: true,min: 15, max: 90 }
          };
          break;
      }

      // var rules = {
      //     upcritical: { required: true, digits: true, greaterThan: "#upwarning" }
      //   , upwarning: { required: true, digits: true, greaterThan: "#lowwarning" }
      //   , lowwarning: { required: true, digits: true, greaterThan: "#lowcritical" }
      //   , lowcritical: { required: true, digits: true  }
      // };
      

      return $("form", $settingDialog).validate({ rules: rules });

      var $lowcritical = $('[name="lowcritical"]', $settingDialog),
          $lowwarning =  $('[name="lowwarning"]', $settingDialog),
          $upwarning = $('[name="upwarning"]', $settingDialog),
          $upcritical = $('[name="upcritical"]', $settingDialog),
          $cblowcritical = $('[name="cblowcritical"]', $settingDialog),
          $cblowwarning =  $('[name="cblowwarning"]', $settingDialog),
          $cbupwarning = $('[name="cbupwarning"]', $settingDialog),
          $cbupcritical = $('[name="cbupcritical"]', $settingDialog),
          $threshold = $('[name="threshold"]', $settingDialog);

      $.validator.addMethod("lowCheck", function(value, element) {
        if ($cblowcritical.is(":checked") && $cblowwarning.is(":checked")
            && (parseFloat($lowcritical.val()) + parseFloat($threshold.val()) > parseFloat($lowwarning.val()))
          ) {
          return false;
        }
        return true;
      }, modelmt.setalarmdl.lowcriticalinfo);

      $.validator.addMethod("lowWarningCheck", function(value, element) {
        if ($cblowwarning.is(":checked")
            && $cbupwarning.is(":checked")
            && (parseFloat($lowwarning.val()) + 2 * parseFloat($threshold.val()) > parseFloat($upwarning.val()))
          ) {
          return false;
        }
        return true;
      }, modelmt.setalarmdl.lowwarninfo);

      $.validator.addMethod("upCheck", function(value, element) {
        if ($cbupwarning.is(":checked") && $cbupcritical.is(":checked")
            && (parseFloat($upwarning.val()) + parseFloat($threshold.val()) > parseFloat($upcritical.val()))
          ) {
          return false;
        }
        return true;
      }, modelmt.setalarmdl.upwarninfo);

      //Low Critical check;
      $.validator.addMethod("criticalUpWarning", function(value, element) {
        if ($cblowcritical.is(":checked") && $cbupwarning.is(":checked")
            && (parseFloat($lowcritical.val()) + 2 * parseFloat($threshold.val()) > parseFloat($upwarning.val()))
          ) {
          return false;
        }
        return true;
      }, modelmt.setalarmdl.lowcriticalinfo2);

      $.validator.addMethod("criticalUpCritical", function(value, element) {
        if ($cblowcritical.is(":checked") && $cbupcritical.is(":checked")
            && (parseFloat($lowcritical.val()) + 2 * parseFloat($threshold.val()) > parseFloat($upcritical.val()))
          ) {
          return false;
        }
        return true;
      }, modelmt.setalarmdl.lowcriticalinfo3);

      //Low Warning Check
      $.validator.addMethod("warningUpCritical", function(value, element) {
        if ($cblowwarning.is(":checked") && $cbupcritical.is(":checked")
            && (parseFloat($lowwarning.val()) + 2 * parseFloat($threshold.val()) > parseFloat($upcritical.val()))
          ) {
          return false;
        }
        return true;
      }, modelmt.setalarmdl.lowwarninfo2);

      var rules = {
          lowcritical: {required:true, min: min, max: max, lowCheck: true, criticalUpWarning: true, criticalUpCritical: true},
          lowwarning: {required:true, min: min, max: max, lowWarningCheck:true, warningUpCritical: true },
          upcritical: {required:true, min: min, max: max },
          upwarning: {required:true, min: min, max: max, upCheck: true},
          threshold: {required:true, min: 0, max: max},
          delay: {required:true, min:0, max:100}
        };

      for (var key in rules) {
        var rule = rules[key];
        unit == 'A'
          ? (rule["number"] = true)
          : (rule["digits"] = true);
      }

      return $("form", $settingDialog).validate({ rules: rules });
    };

    /*Get alarm pure text with style*/
    self.getAlarmTxt = function(status, privi) {
      var priviTxt = privi ? "No Permission: " + PRIVILEGES[privi] || "" : "";

      var statusType = status.toLowerCase().replace(' ', '');

      return '<span href="#" class="alarm '
            + "alarm-" + statusType + '" '
            + 'title="' + priviTxt + '" '
            + '>'
            + modelmt.setalarmdl[statusType]
            + '</span>';
    };

    /*
    Get clickable status html string.
    urlprefix: full url will be like urlprefixget.htm / urlprefixset.htm
    status code, sending params
    */
    self.getAlarmStr = function(urlPrefix, status, params, unit, privi) {
      status = STATUSTYPE[status] || status;
      //type parameter if there is no value pass empty string.
      unit = unit ? ",\"" + unit + "\"" : "";

      privi = privi || 0x00000100;

      if (!EL.Privilege.hasPrivilege(privi)) {
        return self.getAlarmTxt(status, privi);
      }

      var statusType = status.toLowerCase().replace(' ', '');

      return '<a href="javascript:;" class="alarm '
            + "alarm-" + statusType
            + '" onclick=\'EL.SetAlarm.setAlarm(' 
            + "\"" + urlPrefix + "\","
            + JSON.stringify(params)
            + unit
            + ')\'>'
            + modelmt.setalarmdl[statusType]
            + '</a>';
    };
    self.getAlarmStr2 = function(urlPrefix, status, params, unit, privi) {
      status = STATUSTYPE[status] || status;
      //type parameter if there is no value pass empty string.
      unit = unit ? ",\"" + unit + "\"" : "";

      privi = privi || 0x00000100;

      if (!EL.Privilege.hasPrivilege(privi)) {
        return self.getAlarmTxt(status, privi);
      }

      var statusType = status.toLowerCase().replace(' ', '');
      
      return '<a href="javascript:;" class="alarm '
            + "alarm-" + statusType
            + '" onclick=\'EL.SetAlarm.setAlarm(' 
            + "\"" + urlPrefix + "\","
            + JSON.stringify(params)
            + unit
            + ')\'>'
            + modelmt.setalarmdl[statusType]
            + '</a>';
    };

    return self;
  };

}(window, document));
