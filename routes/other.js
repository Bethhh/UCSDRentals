var form = require("../forms.json");

exports.viewForm = function(req, res) {  
	// Your code goes here

	//console.log(form["Types"]);	
	
	res.render('other', form);
}