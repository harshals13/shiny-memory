const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');

router.get('/', (req, res) => {
    res.json('Hello');
});

router.post('/login', (req, res) => {
    login(req, res);
});

router.post('/', (req, res) => {
    addUser(req, res);
});

function login(req, res) {
    User.findOne({email: req.body.email, password: req.body.password}, (err, doc) => {
        if(!err) {
            res.send(doc)
        } else {
            console.log("Unauthorized");
        }
    })
}

function addUser(req, res) {
    let user = new User();
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