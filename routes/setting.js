var form = require("../setting.json");
//var models = require('../models');

exports.view = function(req, res){
	console.log(form);
	res.render('setting',form);
};