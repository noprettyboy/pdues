(function() {

  var self = EL.UploadFile = function() {
    function getDownloadPDUPolicy() {
      $("#btnMainSubmit").hide();
    }

    getDownloadPDUPolicy();
    
    // function getUploadFilePolicy() {
    //   var model = MODEL.updtfw;

    //   $("#uploadPasswordLabel").text(MODEL.login.password);
    //   $("#btnMainSubmit")
    //     .text(model.upload)
    //     .on("mousedown", function() {
    //         var url   = "public/upload.json?username={0}&password={1}".format(EL.Auth.username, $("#uploadPassword").val())
    //         $("#mydialog form").attr("action", url);
    //     });


    //   $("#mydialog form")
    //     .validate({
    //       rules: {
    //         md5file: {
    //           required: true
    //           //, minlength: 3
    //         },
    //         password: {
    //           required: true
    //           //, minlength: 8
    //         }
    //       }
    //     })
    //     //.submit(submitHandler)
    //     ;
    // }

    // getUploadFilePolicy();

  };

}());