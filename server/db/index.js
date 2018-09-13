var mongoose = require('mongoose');
var urlMongoose ='mongodb://localhost/marketdb';

mongoose.connect(urlMongoose);

var db = mongoose.connection;
db.on('error', console.error.bind(console,'connection to database not working'));
db.once('open',function(){
	console.log('connection to database working');
});

module.exports = db;