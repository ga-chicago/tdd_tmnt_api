var express = require('express');
var controller = express.Router();
var bodyParser = require('body-parser');
var turtleModel = require('../models/turtleSchema'); // models/turtleSchema.js

/* GET documentation page */
controller.get('/documentation', function(req, res, next) {
  res.render('index', { title: 'Teenage Mutant Turtle API Documentation' });
});

// REST api for turtles
// get all
controller.get('/', function(req, res, next) {

  // use our model to find all....
  turtleModel.find(function(error, turtles) {
    if (error) return error;
    res.json(turtles);
  });

});

// get by id
controller.get('/:id', function(req, res, next) {

  turtleModel.findById(req.params.id, function(error, turtle) {
    if (error) return error;
    res.json(turtle);
  });

});

// create
controller.post('/', function(req, res, next) {

  // if you need to modify any data before saving
  // manipulate, edit, do whatever to req.body
  // pass in your updated object as the first argument in
  // model.create()

  turtleModel.create(req.body, function(error, turtle) {
    if (error) return error;
    res.json(turtle);
  });

});

// update
controller.put('/:id', function(req, res, next) {
  turtleModel.findByIdAndUpdate(req.params.id, req.body, function(error, turtle) {
    if (error) return error;
    res.json(turtle);
  });
});
controller.patch('/:id', function(req, res, next) {
  turtleModel.findByIdAndUpdate(req.params.id, req.body, function(error, turtle) {
    if (error) return error;
    res.json(turtle);
  });
});

// delete
controller.delete('/:id', function(req, res, next) {
  turtleModel.findByIdAndRemove(req.params.id, req.body, function(error, turtle) {
    if (error) return error;
    res.json({
      "message": "Turtle #" + turtle.id + " has been deleted"
    });
  });
});

module.exports = controller;
