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
    user.fullName = req.body.fullName;
    user.email = req.body.email;
    user.mobile = req.body.mobile;
    user.city = req.body.city;
    user.save((err, doc) => {
        if(!err) {
            res.send(doc);
        } else {
            console.log("Error inserting package");
        }
    })
}

module.exports = router;