exports.view = function(req, res){
	res.render('tmp',{
		'matches':[
			{	'name': 'Costa Verde',
				'lat': '32.867779',
				'lon': '-117.218110',
				'imageURL': 'http://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Douglas_Engelbart_in_2008.jpg/972px-Douglas_Engelbart_in_2008.jpg'			
			},
			{	"name": "Regents Court",
				"lat": "32.855234",
				"lon": "-117.217615",
				"imageURL": "http://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Douglas_Engelbart_in_2008.jpg/972px-Douglas_Engelbart_in_2008.jpg"			
			}		
		]
	});
};