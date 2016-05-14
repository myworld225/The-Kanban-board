//module for db(mongodb)

var mongoose = require('mongoose');

//connection uri
var dbURI = 'mongodb://ksnpark:qkrrl1223@ds021922.mlab.com:21922/ksnpark';

//exports connect function to app.js
exports.connect = function(){

	//get the database connection pool
	mongoose.connect(dbURI);

	//DB connection Events
	//Succeed to connet database
	mongoose.connection.on('connected',function(){
		console.log('Succeed to get connection pool in monoose,'+
			'dbURI is ' + dbURI);
	});

	mongoose.connection.on('error',function(err){
		console.log('Failed to get connection in mongoose, err is' + err);
	});

	//When the connection has disconnected
	mongoose.connection.on('disconnected',function(){
		console.log('Database connection has disconnected');
	});

	//If the Node.js process is going down, close database
	//connection pool
	process.on('SIGINT',function(){
		mongoose.conncetion.close(function(){
			console.log('Application process is going down, disconnect database connection ...');
		});
	});
};

