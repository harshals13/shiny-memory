const mongoose = require('mongoose');
const User = require('./user.model');
const Package = require('./package.model');
const Driver = require('./driver.model');

var tripSchema = new mongoose.Schema({
    package: Package,
    driver: Driver,
    user: User,
    tripDate: {
        type: String
    },
    rate: {
        type: Number
    },
    isCompleted: {
        type: Boolean
    }
});

mongoose.model('Trip', tripSchema)