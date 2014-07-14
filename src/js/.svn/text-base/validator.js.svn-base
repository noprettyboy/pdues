/*
Custom validate rules
*/
(function() {

  $.validator.addMethod("ipv4", 
    function(value, element) {                  
    return this.optional(element) || /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/i.test(value);
  }, function() { return VALID.ipv4 });

  // $.validator.addMethod("resetvalue", 
  //   function(value, element) {                  
  //   return this.optional(element) || /^true$/i.test(value);
  // }, function() { return VALID.resetvalue });

  $.validator.addMethod("ipv6", 
    function(value, element) {            
      return this.optional(element) || /^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i.test(value);
  }, function() { return VALID.ipv6 });

  $.validator.addMethod("nowhitespaces", 
    function(value, element){
      return this.optional(element) || /^\S+$/i.test(value);
  }, function() { return VALID.nowhite });

  $.validator.addMethod("customDate", 
    function (value, element){
      return this.optional(element) || /^(19|20)\d\d[-](0[1-9]|1[012])[-](0[1-9]|[12][0-9]|3[01])$/i.test(value);
  }, function() { return VALID.customdate });

  //For password
  $.validator.addMethod("lowerChar", function(value, element) {
    return /[a-z]/.test(value);
  }, function() { return VALID.lowchar });

  $.validator.addMethod("upperChar", function(value, element) {
    return /[A-Z]/.test(value);
  }, function() { return VALID.uppchar });

  $.validator.addMethod("numberChar", function(value, element) {
    return /\d/.test(value);
  }, function() { return VALID.numchar });

  $.validator.addMethod("specialChar", function(value, element) {
    return /[^\w]/.test(value);
  }, function() { return VALID.spechar });

  $.validator.addMethod("notEqualTo", function(value, element, params) {
    return value != $(params).val();
  }, function() { return VALID.diffval });

  $.validator.addMethod("greaterThan", function(value, element, params) {
    return Number(value) >= Number($(params).val());
  }, function() { return VALID.greater });

  $.validator.addMethod("dtvalue", 
    function(value, element) {            
      return this.optional(element) || /^(\d{4})\/(0\d{1}|1[0-2])\/(0\d{1}|[12]\d{1}|3[01]) (0\d{1}|1\d{1}|2[0-3]):[0-5]\d{1}:([0-5]\d{1})$/i.test(value);
  }, function() { return VALID.customdate });

  //add by zzw begin
  $.validator.addMethod("oldpwd", function(value, element, params) {
    return value == EL.Auth.password;
  }, function() { return VALID.oldpwd });
  //
  $.validator.addMethod("greaterThanCU", function(value, element, params) {
    var result = validateTOF();
    if(!result){
      return true;
    }else{
      return Number(value) >= Number($(params).val())+ window.THRESHODE_DEFAULT.current;
    }
    // return Number(value) >= Number($(params).val())+ window.THRESHODE_DEFAULT.current;   
  }, function() { return VALID.greaterC1 });
  $.validator.addMethod("greaterThanCM", function(value, element, params) {
    var result = validateTOF();
    if(!result){
      return true;
    }else{
      return Number(value) >= Number($(params).val())+ 2*window.THRESHODE_DEFAULT.current;  
    }
  }, function() { return VALID.greaterC2 });
  $.validator.addMethod("greaterThanCD", function(value, element, params) {
    var result = validateTOF();
    if(!result){
      return true;
    }else{
      if (value!=0) {
        return Number(value) >= Number($(params).val())+ window.THRESHODE_DEFAULT.current;
      } else {
        return Number(value) >= Number($(params).val());
      }  
    }  
  }, function() { return VALID.greaterC3 });
  //
  $.validator.addMethod("greaterThanVU", function(value, element, params) {
      var result = validateTOF();
      if(!result){
        return true;
      }else{
        return Number(value) >= Number($(params).val())+ window.THRESHODE_DEFAULT.voltage;
      }
  }, function() { return VALID.greaterV1 });
  $.validator.addMethod("greaterThanVM", function(value, element, params) {
      var result = validateTOF();
      if(!result){
        return true;
      }else{
        return Number(value) >= Number($(params).val())+ 2*window.THRESHODE_DEFAULT.voltage;
      }
  }, function() { return VALID.greaterV2 });
  $.validator.addMethod("greaterThanVD", function(value, element, params) {
      var result = validateTOF();
      if(!result){
        return true;
      }else{
        return Number(value) >= Number($(params).val())+ window.THRESHODE_DEFAULT.voltage;
      }
  }, function() { return VALID.greaterV3 });
  //
  $.validator.addMethod("greaterThanPU", function(value, element, params) {
    var result = validateTOF();
    if(!result){
      return true;
    }else{
      return Number(value) >= Number($(params).val())+ window.THRESHODE_DEFAULT.power;   
    }
  }, function() { return VALID.greaterP1 });
  $.validator.addMethod("greaterThanPM", function(value, element, params) {
    var result = validateTOF();
    if(!result){
      return true;
    }else{
      return Number(value) >= Number($(params).val())+ 2*window.THRESHODE_DEFAULT.power;  
    }
  }, function() { return VALID.greaterP2 });
  $.validator.addMethod("greaterThanPD", function(value, element, params) {
    var result = validateTOF();
    if(!result){
      return true;
    }else{
      if (value!=0) {
        return Number(value) >= Number($(params).val())+ window.THRESHODE_DEFAULT.power;
      } else {
        return Number(value) >= Number($(params).val());
      } 
    }   
  }, function() { return VALID.greaterP3 });
  //
  $.validator.addMethod("greaterThanEUT", function(value, element, params) {
      var result = validateTOF();
      if(!result){
        return true;
      }else{
        return Number(value) >= Number($(params).val())+ window.THRESHODE_DEFAULT.sensorT;
      }
  }, function() { return VALID.greaterE1 });
  $.validator.addMethod("greaterThanEMT", function(value, element, params) {
      var result = validateTOF();
      if(!result){
        return true;
      }else{
        return Number(value) >= Number($(params).val())+ 2*window.THRESHODE_DEFAULT.sensorT;
      }
  }, function() { return VALID.greaterE2 });
  $.validator.addMethod("greaterThanEDT", function(value, element, params) {
      var result = validateTOF();
      if(!result){
        return true;
      }else{
        return Number(value) >= Number($(params).val())+ window.THRESHODE_DEFAULT.sensorT;
      }
  }, function() { return VALID.greaterE3 });
  //
  $.validator.addMethod("greaterThanEUH", function(value, element, params) {
      var result = validateTOF();
      if(!result){
        return true;
      }else{
        return Number(value) >= Number($(params).val())+ window.THRESHODE_DEFAULT.sensorH;
      }
  }, function() { return VALID.greaterE4 });
  $.validator.addMethod("greaterThanEMH", function(value, element, params) {
      var result = validateTOF();
      if(!result){
        return true;
      }else{
        return Number(value) >= Number($(params).val())+ 2*window.THRESHODE_DEFAULT.sensorH;
      }
  }, function() { return VALID.greaterE5 });
  $.validator.addMethod("greaterThanEDH", function(value, element, params) {
      var result = validateTOF();
      if(!result){
        return true;
      }else{
        return Number(value) >= Number($(params).val())+ window.THRESHODE_DEFAULT.sensorH;
      }
  }, function() { return VALID.greaterE6 });

  function validateTOF() {
    var v1,v2,v3,v4,v;
    v1 = !$("#upcritical").val()?0:$("#upcritical").val();
    v2 = !$("#upwarning").val()?0:$("#upwarning").val();
    v3 = !$("#lowwarning").val()?0:$("#lowwarning").val();
    v4 = !$("#lowcritical").val()?0:$("#lowcritical").val();
    v = parseInt(v1) + parseInt(v2) + parseInt(v3) + parseInt(v4);
    console.log('v3:'+v);
    return v;   
  }
  //add by zzw end
})();