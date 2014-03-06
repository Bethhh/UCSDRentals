var models = require('../models');

exports.view = function(req, res){
	res.render('matches',{
		'matches':[
			{	'name': 'Costa Verde',
				'lat': '32.867779',
				'lon': '-117.218110',
				'id':'1',
				'imageURL': 'http://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Douglas_Engelbart_in_2008.jpg/972px-Douglas_Engelbart_in_2008.jpg'			
			},
			{	"name": "Regents Court",
				"lat": "32.855234",
				"lon": "-117.217615",
				"id": '2',
				"imageURL": "http://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Douglas_Engelbart_in_2008.jpg/972px-Douglas_Engelbart_in_2008.jpg"			
			},
      { "name": "Nobel Court",
        "lat": "32.867422",
        "lon": "-117.226703",
        "id": '3',
        "imageURL": "http://cdn.rentcafe.com/dmslivecafe/3/47133/3_47133_1193497.jpg?crop=(0,0,300,77)&cropxunits=300&cropyunits=77"      
      } 	
		]
	});
}

exports.seeDetail1 = function(req,res){
	var data = {"img1":"http://www.gardencommunitiesca.com/Apartment-Rentals/CA/San-Diego/Costa-Verde-Village/Home/CostaVerdeVillage-7.aspx?width=400",
	            "img2":"http://www.gardencommunitiesca.com/Apartment-Rentals/CA/San-Diego/Costa-Verde-Village/Home/CostaVerdeVillage-8.aspx?width=400",
	            "img3":"http://www.gardencommunitiesca.com/Apartment-Rentals/CA/San-Diego/Costa-Verde-Village/Home/CostaVerdeVillage-2.aspx?width=400"};
    res.render('detailedInfo1', data);
};

exports.seeDetail2 = function(req,res){
	var data = {"img1":"http://www.gardencommunitiesca.com/Apartment-Rentals/CA/San-Diego/Costa-Verde-Village/Home/CostaVerdeVillage-7.aspx?width=400",
	            "img2":"http://www.gardencommunitiesca.com/Apartment-Rentals/CA/San-Diego/Costa-Verde-Village/Home/CostaVerdeVillage-8.aspx?width=400",
	            "img3":"http://www.gardencommunitiesca.com/Apartment-Rentals/CA/San-Diego/Costa-Verde-Village/Home/CostaVerdeVillage-2.aspx?width=400"};
    res.render('detailedInfo2', data);
};

exports.seeDetail3 = function(req,res){
  var data = {"img1":"http://cdn.rentcafe.com/dmslivecafe/3/47133/3_47133_961191.jpg",
              "img2":"http://cdn.rentcafe.com/dmslivecafe/3/47133/3_47133_961193.jpg",
              "img3":"http://cdn.rentcafe.com/dmslivecafe/3/47133/3_47133_961200.jpg"};
    res.render('detailedInfo3', data);
};

exports.getMatches = function(req, res){
  var profileID = req.params.id;
  models.Profile
  	.find({"_id":profileID})
  	.exec(afterFind);

  	function afterFind(err, profiles){
  		if(err){console.log(err);res.send(500);}
  		if(profiles == undefined || profiles[0] == undefined){
  			res.send("Impossible! The profile should exist!");
  		}
  		if(profiles[0].Matches.length==0){
  			//call Match function to refind
  			//if still no match
            res.send("noMatch");
  		}else{
  			var json = "";
  			for(var i = 0; i< profiles[0].Matches.length; i++){
                  //build json file and send it to map
                  //display matches
  			}
  		}
  	}
}
