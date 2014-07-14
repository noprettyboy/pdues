/* $.fn.inputToJSON */
/*!
 * Convert input fields to JSON object
 */
(function ($) {

  $.fn.inputToJSON = function() {
    var $this = $(this);

    var result = {};

    $this.each(function() {
      var $input  = $(this)
        , name    = $input.attr("name")
        , value   = $input.val()
        ;

      name && (result[name] = value);
    });

    return result;
  };

})(jQuery);