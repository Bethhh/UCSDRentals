var form = require("../setting.json");
//var models = require('../models');

exports.view = function(req, res){
	console.log(form["User"]);
	console.log(form["User"][0].label);
	form["User"][2].value = req.session.email;
	form["User"][3].value = req.session.pwd;
	console.log(form);
	res.render('setting',form);
};

/*exports.set = function(req, res){
	var array = [];
	array[0] = req.session.email;
	array[1] = req.session.pwd;
	res.send(array);
}*/