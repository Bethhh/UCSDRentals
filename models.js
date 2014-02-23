
var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;
var UserSchema = new Mongoose.Schema({
  // fields are defined here
  			"name": String,
			"preferred": String,
			"email": String,
			"pwd": String,
			"major": String,
			"age": String,
			"phone": String,
			"photo": String,
			"Profiles":[{type:Schema.ObjectId, ref:'Profile'}]
});

var entrySchema = new Mongoose.Schema({

	"label": String,
	"type":String,
	"value": String,
	"selected": Number,
	"order":Number,
	"group":String
});

var profileSchema = new Mongoose.Schema({
	"RentType":String,

	"Types":[entrySchema],
	"TypesDone":Boolean,

	"Property":[entrySchema],
	"PropertyDone":Boolean,

	"Rent":[entrySchema],
	"RentDone":Boolean,

	"Address":[entrySchema],
	"AddressDone":Boolean,

	"Other":[entrySchema],
	"OtherDone":Boolean,

	"Dates":[entrySchema],
	"DatesDone":Boolean,

	"Dones":[Number],
	"Done":Number,
	"User":{type:Schema.ObjectId, ref:'User'}
});



exports.User = Mongoose.model('User', UserSchema);
exports.Entry = Mongoose.model('Entry', entrySchema);
exports.Profile = Mongoose.model('Profile', profileSchema);


