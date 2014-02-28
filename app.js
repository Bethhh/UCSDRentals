

/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');
var mongoose = require('mongoose');

var index = require('./routes/index');
var add =  require('./routes/add');
var menu = require('./routes/menu');
var about = require('./routes/about');
var login = require('./routes/login');
//var newProfile = require('./routes/newProfile');
var newp = require('./routes/newp');
var matches = require('./routes/matches');
var detailedInfo1 = require('./routes/detailedInfo1');
var detailedInfo2 = require('./routes/detailedInfo2');
var existing = require('./routes/existing');
var signup = require('./routes/signup');
var setting = require('./routes/setting');
var submit_type = require('./routes/submit_type');
var update_type = require('./routes/update_type');
var update_list = require('./routes/update_list');
var user = require('./routes/user');
// Example route
// var user = require('./routes/user');

// Connect to the Mongo database, whether locally or on Heroku
// MAKE SURE TO CHANGE THE NAME FROM 'lab7' TO ... IN OTHER PROJECTS
var local_database_name = 'UCSDRentals';
var local_database_uri  = 'mongodb://localhost/' + local_database_name
var database_uri = process.env.MONGOLAB_URI || local_database_uri
mongoose.connect(database_uri);




var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/add', add.addFriend);
app.get('/menu', menu.view);
app.get('/about', about.view);
//app.get('/newProfile', newProfile.view);
app.get('/newp',newp.view);
app.get('/setting',setting.view);
//app.get('/setting/set',setting.set);
app.get('/matches', matches.view);
app.get('/existing', existing.view);
app.get('/detailedInfo1', matches.seeDetail1);
app.get('/detailedInfo2', matches.seeDetail2);
app.get('/signup',signup.view);
app.post('/login/signup', login.sign_up_check);
app.get('/login/logout', login.logout);

app.post('/login', login.log_in_check);
app.get('/user', user.userInfo);
app.post('/user/save', user.save);
app.get('/user/get_name', user.displayUser);
app.post('/submit_type/save/:name', submit_type.save);
app.get('/submit_type/done/:name', submit_type.done);
app.get('/submit_type/:name', submit_type.submitForm);
app.get('/submit_type/submit/submit', submit_type.submit);

app.get('/update_type/display/:id', update_type.displayProfile);
app.get('/update_list/:type', update_list.update);
app.get('/matches/getMatches/:id', matches.getMatches);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
