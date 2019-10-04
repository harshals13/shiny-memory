const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://harshals13:frenchfriesyamahar1@cluster0-4mxkf.mongodb.net/admin?retryWrites=true&w=majority', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB connection Succeeded') }
    else { console.log('Error in DB connection : ' + err)}
});