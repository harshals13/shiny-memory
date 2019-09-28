const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Package = mongoose.model('Package');

router.get('/', (req, res) => {
    Package.find((err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            console.log('Error in retrieving package list');
        }
    })
});

router.post('/', (req, res) => {
    insertPackage(req, res)
})

function insertPackage(req, res) {
    let package = new Package();
    package.packageName = req.body.packageName;
    package.from = req.body.from;
    package.to = req.body.to;
    package.rate = req.body.rate;
    package.save((err, doc) => {
        if(!err) {
            res.redirect('/api/v1/package')
        } else {
            console.log("Error inserting package");
        }
    });
}

module.exports = router;