const mongoose = require('mongoose');

var tripSchema = new mongoose.Schema({
    package: {
        type: String
    },
    user: {
        type: String
    },
    trip: {
        type: String
    },
    rate: {
        type: Number
    }
});

mongoose.model('Trip', tripSchema)