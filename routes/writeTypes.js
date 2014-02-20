

exports.write = function(req, res) {  
	// Your code goes here
	var result = require("../tmp/usernameProfile.json");

	console.log(req.param.id);
	//if(req.param.)
    result['Profile'][0];
    console.log(result);
	//JSON.parse(result);
	//console.log(result);
	//res.json(result);
	/*var fs = require('fs');

	var outputFilename = '/tmp/usernameProfile.json';//hard code right not, need username

    fs.writeFile(outputFilename, JSON.stringify(result, null, 4), function(err) {
    	if(err) {
      		console.log(err);
    	} else {
      		console.log("JSON saved to ");
    	}
	});
*/
}