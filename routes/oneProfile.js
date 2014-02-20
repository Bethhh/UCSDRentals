
var result = require("../oneProfile.json");
var result2 = require("../PExample.json");

exports.getForm = function(req, res) {  
	// Your code goes here
	//console.log(result);
    result['Profile'] = result2;
    console.log(result);
	//JSON.parse(result);
	//console.log(result);
	//res.json(result);
	var fs = require('fs');

	var outputFilename = '/tmp/usernameProfile.json';//hard code right not, need username

    fs.writeFile(outputFilename, JSON.stringify(result, null, 4), function(err) {
    	if(err) {
      		console.log(err);
    	} else {
      		console.log("JSON saved to ");
    	}
	});

	//var result2 = require("../tmp/usernameProfile.json");
}