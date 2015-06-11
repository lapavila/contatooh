// ./server.js
var http = require('http');
var app = require('./config/express')();
require('./config/passport')(app);
require('./config/database.js')('mongodb://localhost/contatooh');

http.createServer(app).listen(app.get('port'), function() {
	console.log('Express Server on port ' + app.get('port'));
});