const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Driver = mongoose.model('Driver');

router.get('/', (req, res) => {
    res.json('Hello');
});

router.post('/', (req, res) => {
    addDriver(req, res);
});

function addDriver(req, res) {
    let driver = new Driver();
    driver.fullName = req.body.fullName;
    driver.email = req.body.email;
    driver.mobile = req.body.mobile;
    driver.language = req.body.language;
    driver.rate = req.body.rate;
    driver.save((err, doc) => {
        if(!err) {
            res.send(doc);
        } else {
            console.log("Error inserting package");
        }
    })
}

module.exports = router;