const mongoose = require('mongoose');
const User = require('./user.model');
const Package = require('./package.model')
var tripSchema = new mongoose.Schema({
    package: Package,
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