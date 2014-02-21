

/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var add =  require('./routes/add');
var menu = require('./routes/menu');
var about = require('./routes/about');
var newProfile = require('./routes/newProfile');
var matches = require('./routes/matches');
var existing = require('./routes/existing');
var types = require('./routes/types');
var properties = require('./routes/properties');
var rent = require('./routes/rent');
var address = require('./routes/address');
var date = require('./routes/date');
var other = require('./routes/other');
var tmp = require('./routes/tmp');

var submit_type = require('./routes/submit_type');
var oneProfile = require('./routes/oneProfile');
var writeTypes = require('./routes/writeTypes');
var user = require('./routes/user');
// Example route
// var user = require('./routes/user');

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
app.get('/newProfile', newProfile.view);
app.get('/matches', matches.view);
app.get('/existing', existing.view);
app.get('/types', types.viewForm);
app.get('/properties', properties.viewForm);
app.get('/rent', rent.viewForm);
app.get('/address', address.viewForm);
app.get('/date', date.viewForm);
app.get('/other', other.viewForm);
app.get('/tmp',tmp.view);
//app.get('/submit_type', submit_type.submiWholeForm);
app.get('/oneProfile', oneProfile.getForm);
app.get('/writeTypes',writeTypes.write);

app.get('/user', user.userInfo);
app.post('/submit_type/:name/save', submit_type.save);
app.get('/submit_type/:name', submit_type.submitForm);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
