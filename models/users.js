var mongoose = require('mongoose')

var basketSchema = mongoose.Schema ({
    departure: String,
    arrival: String,
    date: Date,
    departureTime: String,
    price: Number
})

var userSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    basket: [basketSchema],

})



var userModel = mongoose.model('users', userSchema)

module.exports = userModel;