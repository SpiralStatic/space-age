var mongoose = require('mongoose');

// Create a new Launch Schema
var launchSchema = mongoose.Schema({
    launchId: {
        type: Number,
        required: true,
        unique: true
    }
});

// Tell mongoose to create a real model from our schema and export it
module.exports = mongoose.model('Launch', launchSchema);
