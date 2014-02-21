var form = require("../forms.json");

exports.viewForm = function(req, res) {  
	// Your code goes here

	
	//res.render('types', form);
	res.render('newProfle',form);
}