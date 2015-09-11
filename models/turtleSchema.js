var mongoose = require('mongoose');

// 1 declare our schema
var turtleSchema = new mongoose.Schema({
  name: String,
  weapon: String,
  colour: String
});

// 2 export our model for re-use
module.exports = mongoose.model('Turtle', turtleSchema);
