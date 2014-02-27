var models = require('../models');
var users = require("../setting.json");

exports.userInfo = function(req, res) { 
  console.log(users);
  res.json(users);
};

exports.save = function(req, res){
  console.log(req.body);
  var form_data = req.body["User"];
  console.log(req.body["User"]);
  console.log(req.body["User"][0]);
  console.log(req.body["User"][0].label);
  console.log(form_data[0]);
  var json = '{"'+
      form_data[0].label_id+'":"'+form_data[0].value+'","'+
      form_data[1].label_id+'":"'+form_data[1].value+'","'+
      form_data[2].label_id+'":"'+form_data[2].value+'","'+
      form_data[3].label_id+'":"'+form_data[3].value+'","'+
      form_data[4].label_id+'":"'+form_data[4].value+'","'+
      form_data[5].label_id+'":"'+form_data[5].value+'","'+
      form_data[6].label_id+'":"'+form_data[6].value+'","'+
      form_data[7].label_id+'":"'+form_data[7].value
      +'"}';
  console.log(json);
  json=JSON.parse(json);
  console.log(json);
  var newUser = new models.User(json);
   //   json
      /*{form_data[0].label_id:form_data[0].value,
      form_data[1].label_id:form_data[1].value,
      form_data[2].label_id:form_data[2].value,
      form_data[3].label_id:form_data[3].value,
      form_data[4].label_id:form_data[4].value,*/

      /*"age": form_data["age"],
      "phone":form_data["phone"],
      "photo":form_data["photo"]
  }*/
  //);
  console.log(newUser);
  newUser.save(afterSaving);//find match before or after
  function afterSaving(err){
      if(err){console.log(err); res.send(500);}
      req.session._id = newUser._id;
      req.session.preferred = newUser.preferred;
      console.log(newUser._id);
      res.send(200);
  }
}

exports.displayUser = function(req, res){
  res.send(req.session.preferred);
};
