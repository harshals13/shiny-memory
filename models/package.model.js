const mongoose = require('mongoose');

var packageSchema = new mongoose.Schema({
    packageName: {
        type: String
    },
    from: {
        type: String
    },
    to: {
        type: String
    },
    rate: {
        type: String
    }
});

mongoose.model('Package', packageSchema)