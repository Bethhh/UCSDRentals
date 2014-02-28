
/*
  This script will initialize a local Mongo database
  on your machine so you can do development work.

  IMPORTANT: You should make sure the

      local_database_name

  variable matches its value in app.js  Otherwise, you'll have
  initialized the wrong database.
*/

var mongoose = require('mongoose');
var models = require('./models');

// Connect to the Mongo database, whether locally or on Heroku
// MAKE SURE TO CHANGE THE NAME FROM 'lab7' TO ... IN OTHER PROJECTS
var local_database_name = 'UCSDRentals';
var local_database_uri  = 'mongodb://localhost/' + local_database_name
var database_uri = process.env.MONGOLAB_URI || local_database_uri
mongoose.connect(database_uri);

// Do the initialization here

// Step 1: load the JSON data

// Step 2: Remove all existing documents
var example = require('./example.json');
var users = require('./user.json');

// Step 2: Remove all existing documents
models.Profile
  .find()
  .remove()
  .exec(onceClear); // callback to continue at

models.User
  .find()
  .remove()
  .exec(onceClear2);


// Step 3: load the data from the JSON file
function onceClear(err) {
  if(err) console.log(err);

  // loop over the projects, construct and save an object from each one
  // Note that we don't care what order these saves are happening in...
  var to_save_count = example.length;
  console.log(example.length);
  for(var i=0; i<example.length; i++) {

    var json = example[i];

    console.log("first");
    //console.log(json);

    var u = new models.Profile(json);
    u.TypesDone = true;
    u.PropertyDone = true;
    u.RentDone = true;
    u.OtherDone = true;
    u.AddressDone = true;
    u.DatesDone = true;
    console.log(u);

    u.save(function(err, u) {
      if(err) console.log(err);
      to_save_count--;
      console.log(to_save_count + ' left to save');
      if(to_save_count <= 0) {
        console.log('DONE Profile');
        // The script won't terminate until the 
        // connection to the database is closed
        

        //mongoose.connection.close();
      }
    });
  }
}
//mongoose.connection.close();

function onceClear2(err) {
  if(err) console.log(err);

  // loop over the projects, construct and save an object from each one
  // Note that we don't care what order these saves are happening in...
  var to_save_count = users.length;
  console.log(users.length);
  for(var i=0; i<users.length; i++) {

    var json = users[i];

    //console.log(json);

    var u = new models.User(json);

    console.log(u);

    u.save(function(err, u) {
      if(err) console.log(err);
      to_save_count--;
      console.log(to_save_count + ' left to save');
      if(to_save_count <= 0) {
        console.log('DONE users');
        // The script won't terminate until the 
        // connection to the database is closed
        

        //mongoose.connection.close();
      }
    });
  }
}
mongoose.connection.close();

