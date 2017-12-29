var express = require('express');
var request = require('superagent');
var app = express();



app.set('view engine', 'ejs');
app.set('views', __dirname + '/public/views/');

app.use(express.static(__dirname + '/public'));


var NON_INTERACTIVE_CLIENT_ID = 'CLIENT_ID_FROM_AUTH0';
var NON_INTERACTIVE_CLIENT_SECRET = 'CLIENT_SECRET_FROM_AUTH0';

var authData = {
  client_id: NON_INTERACTIVE_CLIENT_ID,
  client_secret: NON_INTERACTIVE_CLIENT_SECRET,
  grant_type: 'client_credentials',
  audience: 'audience_from_auth0'
}

// Middleware request to oauth/token Auth0 API to retrieve valid access_token.
function getAccessToken(req, res, next){
  request
    .post('https://answart.auth0.com/oauth/token')
    .send(authData)
    .end(function(err, response) {
      if(response.body.access_token){
        req.access_token = response.body.access_token;
        next();
      } else {
        var message = response.body ? response.body : { message: 'Unauthorized' };
        res.status(401).send({ message });
      }
    })
}


app.get('/', function(req, res){
  res.render('index');
})


app.get('/movies', getAccessToken, function(req, res){
  console.log('CALLING /movies:');
  // request
  //   .get('http://localhost:8080/authors')
  //   .set()
  //   .end(function(err, data) {})
  var movies = []
  res.render('movies', { movies: movies } );
})

app.get('/authors', getAccessToken, function(req, res){
  console.log('CALLING /authors:');
  // request
  //   .get('http://localhost:8080/authors')
  //   .set()
  //   .end(function(err, data) {})
  var authors = []
  res.render('authors', { authors: authors } );
})

app.get('/publications', getAccessToken, function(req, res){
  console.log('CALLING /publications:');
  // request
  //   .get('http://localhost:8080/authors')
  //   .set()
  //   .end(function(err, data) {})
  var publications = []
  res.render('publications', { publications: publications } );
})

app.get('/pending', getAccessToken, function(req, res){
  console.log('CALLING /pending:');
  // request
  //   .get('http://localhost:8080/authors')
  //   .set()
  //   .end(function(err, data) {})
  var pending = []
  res.render('pending', { pending: pending } );
})


app.listen(3000);
