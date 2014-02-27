var models = require('../models');
var result = require("../setting.json");
var user = new models.User();

exports.userInfo = function(req, res) { 
  console.log(users['User']);
  res.json(users['User']);
};

exports.save = function(req, res){
  console.log(req.body);
  var form_data = req.body;
/*
  var newUser = new models.User({
      "name":form_data["label"],
      "type": form_data["type"],
      "value":form_data["value"],
      "selected":form_data["selected"],
      "order": form_data["order"],
      "group": form_data["group"]
  });*/

}
