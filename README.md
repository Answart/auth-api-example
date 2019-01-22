# auth-api-example

Rudimentary example of 2 clients (representing users w/different permissions) that access an API whose endpoints are protected by Auth0.

User stories
------------

* As a general user, I can access data on movies, reviewers, and publications upon request.
* As a general user, I cannot access data on pending reviews.
* As an admin user, I can access data on movies, reviewers, publications, AND pending reviews upon request.

Tech Stack and Key Packages
---------------------------

### Server Side

* [Express](https://expressjs.com/): Fast, unopinionated, minimalist web framework for node
* [Express JWT](https://github.com/auth0/express-jwt#readme): Middleware that validates JsonWebTokens and sets req.user
* [Auth0 API JWT RSA validation](https://www.npmjs.com/package/auth0-api-jwt-rsa-validation): A module allowing JWT tokens validating abstraction of the Auth0 API

### Client Side

* [EJS](https://ejs.co/): Embedded JavaScript templates
* [Superagent](https://github.com/visionmedia/superagent#readme): Client-side and Node.js HTTP request library

App Map
-------
```
movie-analyst-api/        API server
    server.js                 server config with permission/access middleware with dummy data responses
movieanalyst-admin/       Client app
    server.js                 server config with 'admin' permission when making api calls
    public/
        includes/                 view layout module
        views/                    views for root page and for movies, publications, authors, etc with additional views not available to website app.
movieanalyst-website/     Client app
    server.js                 server config with 'general' permission when making api calls
    public/
        views/                    views for root page and for movies, publications, authors, etc.
```

Getting Started
---------------

```bash
# Install dependencies for each app
$ cd movie-analyst-api;npm install;cd ../movieanalyst-admin;npm install;cd ../movieanalyst-website;npm install;cd ..;

# Launch API Server and be accessed on port 8080.
$ cd movie-analyst-api;
$ npm start;
# Go to http://localhost:8080

# Launch admin website in separate tab
$ cd movieanalyst-admin;
$ npm start;
# Go to http://localhost:4000

# Launch regular website in separate tab
$ cd movieanalyst-website;
$ npm start;
# Go to http://localhost:3000
```

NPM Commands for API Server and Client apps
------------

| Command | Description |
|---------|-------------|
|npm install|Install dependencies in package.json|
|npm start|Start server on specified port @ **localhost:PORT**|
