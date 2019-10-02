const express = require('express');
const mongoose = require('mongoose');
const Trip = mongoose.model('Trip');
var router = express.Router();

router.get('/', (req, res) => {
    Trip.findOne({"user.email": req.query.email}, function(err, docs) {
        if(!err) {
            res.send(docs);
        } else {
            res.json({
                error: "Could not find trip for the requested user"
            })
        }
    })
});

router.post('/', (req, res) => {
    addNewTrip(req, res);
});

router.put('/', (req, res) => {
    updateDriver(req, res);
});

function updateDriver(req, res) {
    Trip.findByIdAndUpdate(req.body._id, { driver: req.body.driver }, {new: true}, function(err, docs){
        if (!err) {
            res.send(docs);
        }
    })
}

function addNewTrip(req, res) {
    let trip = new Trip();
    Trip.findOne({"user.email": req.query.email}, function(err, docs) {
        if(!err) {
            trip = docs;
        } else {
            res.json({
                error: "Could not find trip for the requested user"
            })
        }
    });
    trip.package = req.body.package;
    trip.user = req.body.user;
    trip.tripDate = req.body.tripDate;
    trip.rate = req.body.rate;
    trip.isCompleted = req.body.isCompleted;
    trip.save((err, doc) => {
        if(!err) {
            res.send(doc);
        } else {
            console.log("Error inserting package");
        }
    });
}

module.exports = router;