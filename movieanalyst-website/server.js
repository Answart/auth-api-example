var express = require('express');
var request = require('superagent');
var app = express();



app.set('view engine', 'ejs');
app.set('views', __dirname + '/public/views/');

app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res){
  res.render('index');
})


app.get('/movies', function(req, res){
  console.log('CALLING /movies:');
  // request
  //   .get('http://localhost:8080/authors')
  //   .set()
  //   .end(function(err, data) {})
  var movies = []
  res.render('movies', { movies: movies } );
})

app.get('/authors', function(req, res){
  console.log('CALLING /authors:');
  // request
  //   .get('http://localhost:8080/authors')
  //   .set()
  //   .end(function(err, data) {})
  var authors = []
  res.render('authors', { authors: authors } );
})

app.get('/publications', function(req, res){
  console.log('CALLING /publications:');
  // request
  //   .get('http://localhost:8080/authors')
  //   .set()
  //   .end(function(err, data) {})
  var publications = []
  res.render('publications', { publications: publications } );
})

app.get('/pending', function(req, res){
  console.log('CALLING /pending:');
  // request
  //   .get('http://localhost:8080/authors')
  //   .set()
  //   .end(function(err, data) {})
  var pending = []
  res.render('pending', { pending: pending } );
})


app.listen(3000);
