
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

var entrySchema = new Mongoose.Schema({
{

	"label": String,
	"type":String,
	"value": String,
	"selected": Number,
	"order":Number.
	"group":String
});



exports.User = Mongoose.model('User', UserSchema);
exports.Entry = Mongoose.model('Entry', entrySchema);


