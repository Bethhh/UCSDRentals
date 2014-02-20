
var Mongoose = require('mongoose');

var UserSchema = new Mongoose.Schema({
  // fields are defined here
  			"name": String,
			"preferred": String,
			"email": String,
			"pwd": String,
			"major": String,
			"rentout": [String],
			"rentin": [String],
			"age": String,
			"phone": String,
			"photo": String
});



exports.User = Mongoose.model('User', UserSchema);


