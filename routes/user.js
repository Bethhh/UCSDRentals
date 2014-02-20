var users = require("../user.json");
exports.userInfo = function(req, res) { 
  console.log(users);
  res.json(users);
 /* console.log("here");
  var userEmail = req['email'];
  var userPwd  = req['pwd'];
  console.log("email");
  //console.log(projectID);
  //var title = json[projectID-1];
  //['title'];
  //console.log(title);
  // query for the specific project and
  // call the following callback
  models.User
      .find({"email":userEmail})
      .exec(afterQuery);


  function afterQuery(err, users) {
    if(err) console.log(err);
    console.log(users[0]);
    //res.json(projects[0]);
    window.location='/menu';
  }*/
};

/*exports.addProject = function(req, res) {
  var form_data = req.body;
  console.log(form_data["date"]);

  // make a new Project and save it to the DB
  var newProject = new models.Project({
      "title":form_data["project_title"],
      "date": new Date(form_data["date"]),
      "summary":form_data["summary"],
      "image":form_data["image_url"]
  });

  newProject.save(afterSaving);
  function afterSaving(err){
    if(err){console.log(err); res.send(500);}
    res.send();
  }
  // YOU MUST send an OK response w/ res.send();
}

exports.deleteProject = function(req, res) {
  var projectID = req.params.id;

  // find the project and remove it
  // YOU MUST send an OK response w/ res.send();
    models.Project
      .find({"_id":projectID})
      .remove()
      .exec(afterRemoving);

    function afterRemoving(err, projects){
      if(err) console.log(err);
      res.send();
    }
}*/