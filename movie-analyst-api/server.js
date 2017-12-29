var express = require('express');
var app = express();
var jwt = require('express-jwt');
var rsaValidation = require('auth0-api-jwt-rsa-validation');


// Movies API endpoint
app.get('/movies', function(req, res){
  var movies = [];

  res.json(movies);
})

// Reviewers API endpoint
app.get('/reviewers', function(req, res){
  var authors = [];

  res.json(authors);
})

// Publications API endpoint
app.get('/publications', function(req, res){
  var publications = [];

  res.json(publications);
})

// Pending reviews API endpoint
app.get('/pending', function(req, res){
  var pending = [];

  res.json(pending);
})

// Launch API Server and be accessed on port 8080.
app.listen(8080);
