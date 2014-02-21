
var result = require("../result.json");

exports.submitForm = function(req, res) {  
	// Your code goes here
	console.log(req.params.name);
	console.log(result[req.params.name]);
	//JSON.parse(result);
	//console.log(result);
	res.json(result[req.params.name]);
}

exports.save = function(req, res){
  var json = req.body;
  console.log(json);

  // make a new Project and save it to the DB
  for(var i = 0; i< json.length; i++){
  	  var form_data = [i];
	  var newEntry = new models.Entry({
	      "label":form_data["label"],
	      "type": form_data["type"],
	      "value":form_data["value"],
	      "selected":form_data["selected"],
	      "order": form_data["order"],
	      "group": form_data["group"]
	  });


	  newEntry.save(afterSaving);
  	  function afterSaving(err){
    	if(err){console.log(err); res.send(500);}
        //res.send();
      }
  }

  if(req.params.name == "Rent"){
  	$("#rent_btn").removeClass("btn-danger");
  	$("#rent_btn").addClass("btn-success");
  }
  res.send();

}