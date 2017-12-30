var express = require('express');
var request = require('superagent');
var app = express();



app.set('view engine', 'ejs');
app.set('views', __dirname + '/public/views/');

app.use(express.static(__dirname + '/public'));


var NON_INTERACTIVE_CLIENT_ID = '1axCdwyuT5qWbWrdYsBpI34BFVRfCwKY';
var NON_INTERACTIVE_CLIENT_SECRET = 'YOUR-API-IDENTIFIER';

var authData = {
  client_id: NON_INTERACTIVE_CLIENT_ID,
  client_secret: NON_INTERACTIVE_CLIENT_SECRET,
  grant_type: 'client_credentials',
  audience: 'YOUR-API-IDENTIFIER'
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
  request
    .get('http://localhost:8080/movies')
    .set('Authorization', 'Bearer ' + req.access_token)
    .end(function(err, data) {
      if(err || data.status == 403){
        res.status(403).send({ message: err || '403 Forbidden' });
      } else if(movies = data.body) {
        res.status(200).render('movies', { movies: movies} );
      } else {
        res.status(400).send({ message: 'Forbidden' })
      }
    })
})

app.get('/authors', getAccessToken, function(req, res){
  request
    .get('http://localhost:8080/authors')
    .set('Authorization', 'Bearer ' + req.access_token)
    .end(function(err, data) {
      if(err || data.status == 403){
        res.status(403).send({ message: err || '403 Forbidden' });
      } else if(authors = data.body) {
        res.status(200).render('authors', { authors: authors} );
      } else {
        res.status(400).send({ message: 'Forbidden' })
      }
    })
})

app.get('/publications', getAccessToken, function(req, res){
  request
    .get('http://localhost:8080/publications')
    .set('Authorization', 'Bearer ' + req.access_token)
    .end(function(err, data) {
      if(err || data.status == 403){
        res.status(403).send({ message: err || '403 Forbidden' });
      } else if(publications = data.body) {
        res.status(200).render('publications', { publications: publications} );
      } else {
        res.status(400).send({ message: 'Forbidden' })
      }
    })
})

app.get('/pending', getAccessToken, function(req, res){
  request
    .get('http://localhost:8080/pending')
    .set('Authorization', 'Bearer ' + req.access_token)
    .end(function(err, data) {
      if(err || data.status == 403){
        res.status(403).send({ message: err || '403 Forbidden' });
      } else if(pending = data.body) {
        res.status(200).render('pending', { pending: pending} );
      } else {
        res.status(400).send({ message: 'Forbidden' })
      }
    })
})


app.listen(4000);
