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
require("./models/driver.model");

// Using Bodyparser
app.use(bodyParser.json());

const userController = require('./controllers/userController');

const packageController = require('./controllers/packageController');

const tripController = require('./controllers/tripController');

const driverController = require('./controllers/driverController');

// API routes
  app.use('/api/v1/user', userController, (router));

  app.use('/api/v1/package', packageController, (router));

  app.use('/api/v1/trip', tripController, (router));

  app.use('/api/v1/driver', driverController, (router))


  module.exports = app;