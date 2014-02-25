var models = require('../models');

exports.updateOut = function(req,res){
	models.Profile
		.find({"User":req.session._id, "RentType":"Rent Out"})
		.sort('-date')		
		.exec(renderlist);
	function renderlist(err, lists){
		var json= '["';

		for(var i =0; i<lists.length; i++){
			json = json+lists[i]._id+'"';
			if(i!=lists.length-1){
				json = json + ', "';
			}
		}
		json = json + ']';
		console.log(json);
		res.json( {"lists":json});//array of ids
	}
}

exports.updateIn = function(req,res){

}