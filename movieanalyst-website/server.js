var express = require('express');
var request = require('superagent');
var app = express();




app.get('/', function(req, res){
  res.render('index');
})


app.get('/movies', function(req, res){
  // request
  //   .get()
  //   .set()
  //   .end(function(err, data) {})
})

app.get('/authors', function(req, res){
  // request
  //   .get()
  //   .set()
  //   .end(function(err, data) {})
})

app.get('/publications', function(req, res){
  // request
  //   .get()
  //   .set()
  //   .end(function(err, data) {})
})

app.get('/pending', function(req, res){
  // request
  //   .get()
  //   .set()
  //   .end(function(err, data) {})
})


app.listen(3000);
