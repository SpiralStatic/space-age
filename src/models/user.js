var mongoose = require('mongoose');

// Create a new User Schema
var userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    favorites: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Launch'
    }]
});

// Tell mongoose to create a real model from our schema and export it
module.exports = mongoose.model('User', userSchema);
