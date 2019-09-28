const express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.json('Hello');
});

router.post('/login', (req, res) => {

});

module.exports = router;