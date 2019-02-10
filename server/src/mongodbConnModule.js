var mongoose = require('mongoose');

module.exports.connect = function() {
	mongoose.connect('mongodb://test:test123@ds059702.mlab.com:59702/post');
	var db = mongoose.connection;
	db.on("error", console.error.bind(console, "connection error"));
	db.once("open", function(callback){
	  console.log("Connection Succeeded");
	});
	return db;
}