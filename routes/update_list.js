var models = require('../models');

exports.update = function(req,res){
	var type = "";
	if(req.params.type == "RentOut")
		type = "Rent Out";
	else if(req.params.type == "RentIn")
		type = "Rent In";
	else
		res.send("No Rent Type!");

	console.log(type);

	models.Profile
		.find({"User":req.session._id, "RentType":type})
		.sort('-date')		
		.exec(renderlist);
	function renderlist(err, lists){
		var json= '["';

		for(var i =0; i<lists.length; i++){
			json = json+lists[i]._id;
			if(i!=lists.length-1){
				json = json + '", "';
			}
		}
		json = json + '"]';
		console.log(json);
		res.json( {"lists":json});//array of ids
	}
}
