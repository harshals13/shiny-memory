var express = require('express');

var bodyParser = require('body-parser');

var app = express();

const config = require('./config/config');

var router = express.Router();

const path = require('path');

//app.use(express.static(path.join(__dirname, 'public')));

// Connecting to database
require('./models/db')
require("./models/package.model");
require("./models/user.model");
require("./models/trip.model");
require("./models/driver.model");
require("./models/booking.model");

// Using Bodyparser
app.use(bodyParser.json());

const userController = require('./controllers/userController');

const packageController = require('./controllers/packageController');

const tripController = require('./controllers/tripController');

const driverController = require('./controllers/driverController');

const bookingController = require('./controllers/bookingController');

// API routes
  app.use('/api/v1/user', userController, (router));

  app.use('/api/v1/package', packageController, (router));

  app.use('/api/v1/trip', tripController, (router));

  app.use('/api/v1/driver', driverController, (router));

  app.use('/api/v1/booking', bookingController, (router));


  module.exports = app;