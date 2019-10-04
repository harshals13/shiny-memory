const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://harshals13:T9IL817ngqqtQY6f@cluster0-4mxkf.mongodb.net/admin?retryWrites=true&w=majority', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB connection Succeeded') }
    else { console.log('Error in DB conncetion : ' + err)}
});