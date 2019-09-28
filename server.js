var express = require('express');

var bodyParser = require('body-parser');

var app = express();

const config = require('./config/config');

var router = express.Router();

const path = require('path');

// Connecting to database
require('./models/db')
require("./models/package.model");
require("./models/user.model");
require("./models/trip.model");

// Using Bodyparser
app.use(bodyParser.json());

const userController = require('./controllers/userController')

const packageController = require('./controllers/packageController')

  // // API to check if server is active
  // app.get('/ping', function(req, res) {
  //     res.send("Hello, there!");
  //     console.log("Hello, there!");
  // });

  // // To authenticate with token
  // app.use('/api/v1', require('./middleware/authService'));

  // Controller for bank related API
  app.use('/api/v1/user', userController, (router));

  app.use('/api/v1/package', packageController, (router))

  // // Controller to get authentication token
  // app.use('/', require('./controllers/user'));

  module.exports = app;