const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo:27017/booking-app', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (!err) { console.log('MongoDB connection Succeeded') }   
    else { console.log('Error in DB connection : ' + err)}
});