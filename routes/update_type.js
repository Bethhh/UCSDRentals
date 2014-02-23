var models = require('../models');

exports.displayProfile = function(req,res){
    //find which profile is clicked
    //fake right now
    //should use profile id to find
    //now use date?
    models.Profile
    	.find()
    	.sort('date')
    	.exec(showForm);

    function showForm(err, profiles){
    	//profiles[0]
    	if(err) console.log(err);
        res.json(profiles[0]);
    }
}