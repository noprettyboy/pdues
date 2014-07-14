//import namespace
var WebSvr    = require('websvr')
  , fs        = require('fs')
  , qs        = require('querystring')
  , jsonFile  = '../src/test/test.json'
  ;

//Start the WebSVr, runnting at parent folder, default port is 8054, directory browser enabled;
//try at: http://localhost:8054
var webSvr = new WebSvr({
    root:"./../"
  , port:         8888
  , listDir:      true
  , defaultPage:  "login.htm"

  , httpsPort :   8883
  , httpsKey  :   fs.readFileSync("cert/privatekey.pem")
  , httpsCert :   fs.readFileSync("cert/certificate.pem")
  //cache: false,
  , debug: true
}).start();


//General request handler;
webSvr.url(/.json/, function(req, res){

  var url   = req.url
    , idx   = url.indexOf("?");

  var getTestResult = function(text) {
    var testJSON = JSON.parse(fs.readFileSync(jsonFile).toString());
    for (key in testJSON) {
      text = text.replace(key, testJSON[key]);
    }
    return text;
  };

  var output = function() {
    if (idx > -1) {
      var params = qs.parse(url.substr(idx + 1));

      console.log("params", params);

      if (params.locale) {
        var testJSON = JSON.parse(fs.readFileSync(jsonFile));
        testJSON["~locale_value~"] = params.locale;
        fs.writeFileSync(jsonFile, JSON.stringify(testJSON, '    ', '    '));
      }

      url = url.substr(0, idx);
    }

    var text = fs.readFileSync(".." + url).toString();
    res.end( getTestResult(text) );
  };

  output();
});