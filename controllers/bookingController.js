const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Booking = mongoose.model('Booking');

router.get('/', (req, res) => {
    res.json('Hello');
});

router.post('/', (req, res) => {
    newBooking(req, res);
});

function newBooking(req, res) {
    let booking = new Booking();
    booking.fullName = req.body.fullName;
    booking.email = req.body.email;
    booking.mobile = req.body.mobile;
    booking.city = req.body.city;
    booking.save((err, doc) => {
        if(!err) {
            res.send(doc);
        } else {
            console.log("Error inserting package");
        }
    })
}

module.exports = router;