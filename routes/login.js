var models = require('../models');

exports.log_in_check = function(req,res){
  console.log("inlogin");
  console.log(req.body);

  var email = req.body.email;
  var filter = /^([a-zA-Z0-9_\.\-])+\@ucsd.edu+$/;
  var password = req.body.password;
  var errorMsgs = ["nopwd","invalidemail","noaccount","wrongpwd"];
  var error = "";

  if (!filter.test(email)){
  	    error = errorMsgs[1];
  	    res.send(error);
  }else if (password == ''){
  	    error = errorMsgs[0];
  	    res.send(error);
  }else{
	models.User
    	.find({"email": email})
    	.sort()
    	.exec(checkUser);

    function checkUser(err, users){
    	if(err) console.log(err);
    	console.log("isHERE" + users);
    	if(users[0] == undefined){//not found user
          error = errorMsgs[2];
          res.send(error);
    	}else{
    	  console.log("that="+users[0]);
    	  if(users[0].pwd != password){
            error = errorMsgs[3];
            res.send(error);
    	  }else{
    	  	error = users[0]._id;
    	  	req.session._id = error;
          req.session.preferred = users[0].preferred;
    	  	console.log("id");
    	  	console.log(req.session._id);
    	  	res.send(error);
    	  }
    	}
	  }
  }	
}

exports.sign_up_check = function(req,res){
  console.log("insignup");
  console.log(req.body);

  var email = req.body.email;
  var filter = /^([a-zA-Z0-9_\.\-])+\@ucsd.edu+$/;
  var password1 = req.body.password1;
  var password2 = req.body.password2;
  var errorMsgs = ["nopwd","invalidemail","accountexist","wrongpwd"];
  var error = "";

  if (!filter.test(email)){
        error = errorMsgs[1];
        res.send(error);
  }else if (password1 == '' | password2 == ''){
        error = errorMsgs[0];
        res.send(error);
  }else if(password1 != password2){
        error = errorMsgs[3];
        res.send(error);  
  }else{
  models.User
      .find({"email": email})
      .sort()
      .exec(checkUser);

    function checkUser(err, users){
      if(err) console.log(err);

      if(users[0] == undefined){//not found user
          req.session.email = email;
          req.session.pwd = password1;
          res.send("pass");
      }else{
        error = errorMsgs[2];
        res.send(error);
      }
    } 
  }
}

exports.logout = function(req, res){
  req.session.email = "";
  req.session.pwd = "";
  req.session.preferred = "";
  req.session._id = "";
  res.send("successfully log out");
}