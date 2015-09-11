var mongoose = require('mongoose');

// 1 - create a connection string
var cs = 'mongodb://localhost/turtles';

// 2 - make a connection to our database
mongoose.connect(cs);

// 3 - listen to connect, disconnect, and error events
mongoose.connection.on('connected', function() {
  console.log('Mongoose connected to: ' + cs);
});
mongoose.connection.on('disconnected', function() {
  console.log('Mongoose disconnected from: ' + cs);
});
mongoose.connection.on('error', function(error) {
  console.log('Mongoose has encountered an error: ' + error);
});
