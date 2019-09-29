const mongoose = require('mongoose');
const Trip = require('./trip.model')

var bookingSchema = new mongoose.Schema({
    trip: Trip,
    pickUpAddress: {
        type: String
    },
    pickUpTime: {
        type: String
    },
    paymentStatus: {
        type: String
    }
});

mongoose.model('Booking', bookingSchema)