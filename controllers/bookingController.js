const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Booking = mongoose.model('Booking');
const Trip = mongoose.model('Trip');

router.get('/', (req, res) => {
    res.json('Hello');
});

router.post('/', (req, res) => {
    newBooking(req, res);
});

function newBooking(req, res) {
    let booking = new Booking();
    booking.trip = req.body.trip;
    booking.pickUpAddress = req.body.pickUpAddress;
    booking.pickUpTime = req.body.pickUpTime;
    booking.paymentStatus = req.body.paymentStatus;
    booking.save((err, doc) => {
        if(!err) {
            Trip.findByIdAndUpdate(req.body.trip._id, { isCompleted: true }, {new: true}, function (err, document){
                res.send(doc);
            });
        } else {
            console.log("Error inserting package");
        }
    })
}

module.exports = router;