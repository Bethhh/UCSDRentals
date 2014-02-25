var models = require('../models');

exports.displayProfile = function(req,res){
    //find which profile is clicked
    //fake right now
    //should use profile id to find
    //now use date?
    console.log(req.params.id);

    models.Profile
    	.find({"_id":req.params.id})
    	.sort('date')
    	.exec(showForm);

    function showForm(err, profiles){
    	//profiles[0]
    	if(err) console.log(err);
        if(profiles == undefined){
            res.send("Error! Profile not found!");
        }
        res.json(profiles[0]);
    }
}