(function() {

  var self = EL.DownloadSet = function() {   
    function getDownloadPolicy() {
    	$("#btnMainSubmit").hide();
    }

    getDownloadPolicy();

    $("#clearlog").click(function() {
    	$.messager.confirm(MODEL.buttons.message, MODEL.diagnostic.confirminfo, function () {
    		$.ajax({
		        type: "GET",
		        url: "private/clearlog.json",
		        // data: "{}",
		        dataType : "json",
		        success: function(data) {
		        	if (EL.UpdateStatus(data)) {
		              // $('#mydialog').dialog('destroy');
		              // $('#mydialog').html('');	                      
		            }
		        }
		    });
    	});
    });
  };

}());