var form = require("../forms.json");

exports.view = function(req, res){
	res.render('existing', form);
};