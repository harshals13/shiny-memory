const express = require('express');
const mongoose = require('mongoose');
const Trip = mongoose.model('Trip');
const Package = mongoose.model('Package');
const User = mongoose.model('User');
var router = express.Router();

router.get('/', (req, res) => {
    Trip.find((err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            console.log('Error in retrieving package list');
        }
    })
    // Trip.forEach(
    //     function (trip) {
    //         trip.package = Package.findOne( { "_id": trip.package } );
    //         trip.user = User.findOne( { "_id": trip.user  } );
    //         newBook.authors = db.authors.find( { "_id": { $in: newBook.authors }  } ).toArray();
    //         trip.insert(newBook);
    //     }
    // );
});

router.post('/', (req, res) => {
    addNewTrip(req, res);
});

function addNewTrip(req, res) {
    let trip = new Trip();
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