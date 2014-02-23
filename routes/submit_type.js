var models = require('../models');
var result = require("../result.json");
var profile = new models.Profile();
profile.TypesDone = false;
profile.DatesDone = false;
profile.RentDone = false;
profile.PropertyDone = false;
profile.OtherDone = false;
profile.AddressDone = false;
//need to add user and renttype

exports.submitForm = function(req, res) {  
	// Your code goes here
	console.log("yay");
	
	console.log("here"+ result[req.params.name]);
	//JSON.parse(result);
	//console.log(result);
	res.json(result[req.params.name]);
}

/*.submitWholeForm = function(req, res) {  
	// Your code goes here
	//console.log(result['Types']);
	console.log(result[req.params.name]);
	//JSON.parse(result);
	//console.log(result);
	res.json(result[req.params.name]);
}*/

exports.save = function(req, res){
  //var json = req.body;
  console.log(req.body);

	  var form_data = req.body;
  var newEntry = new models.Entry({
      "label":form_data["label"],
      "type": form_data["type"],
      "value":form_data["value"],
      "selected":form_data["selected"],
      "order": form_data["order"],
      "group": form_data["group"]
  });
  switch(form_data["group"]){
  	case "Types":
      profile.Types.push(newEntry);
      break;
    case "Property":
      profile.Property.push(newEntry);
      break;
    case "Rent":
      profile.Rent.push(newEntry);
      break;
    case "Other":
      profile.Other.push(newEntry);
      break;
    case "Date":
      profile.Dates.push(newEntry);
      break;
    case "Address":
      profile.Address.push(newEntry);
      break;
    default:
      console.log("switch err");
      break;
        //console.log(profile.Types[0].label);
  }
  res.send(200);
}
exports.done = function(req,res){
  console.log("I am here"+ req.params.name);
  switch(req.params.name){
  	case "Types":
      profile.TypesDone = true;
      break;
    case "Property":
      profile.PropertyDone = true;
      break;
    case "Rent":
      profile.RentDone = true;
      break;
    case "Other":
      profile.OtherDone = true;
      break;
    case "Date":
      profile.DatesDone = true;
      break;
    case "Address":
      profile.AddressDone = true;
      break;
    default:
      console.log("switch err done");
      break;
    //console.log(profile.Types[0].label);
  }
  res.send(200);
}
exports.submit = function(req,res){
	console.log("insubmit");
	if(profile.TypesDone && profile.DatesDone && profile.OtherDone 
	&& profile.RentDone && profile.PropertyDone && profile.AddressDone){
		profile.save(afterSaving);
		function afterSaving(err){
          if(err){console.log(err); res.send(500);}
          console.log("success");
          res.send();
		}
	}else{
		res.send("unfinished");
	}
}