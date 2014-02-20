
var result = require("../result.json");

exports.submitForm = function(req, res) {  
	// Your code goes here
	console.log(result['Types']);
	//JSON.parse(result);
	//console.log(result);
	res.json(result['Types']);
}