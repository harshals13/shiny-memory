const mongoose = require('mongoose');

var driverSchema = new mongoose.Schema({
    fullName: {
        type: String
    },
    car: {
        type: String
    },
    email: {
        type: String
    },
    mobile: {
        type: String
    },
    language: {
        type: String
    },
    rate: {
        type: Number
    }
});

mongoose.model('Driver', driverSchema)