var mongoose = require('mongoose');

// Create a new Launch Schema
var launchSchema = mongoose.Schema({
    name: { // Launch NAme
        type: String,
        required: true,
    },
    locations: { // Location of Launch
        name: {
            type: String,
            required: true
        },
        latitude: {
            type: String,
            required: true
        },
        longitude: {
            type: String,
            required: true
        },
        wikiURL: {
            type: String
        },
        agencies: { // Agency conducting the lauch
            name: {
                type: String,
                required: true
            },
            infoURLs: {
                type: String
            }
        },
        required: true,
    },
    rockets: { // Rockets being used at at launch
        name: {
            type: String,
            required: true
        },
        wikiURL: {
            type: String
        },
        imageURL: {
            type: String
        },
        required: true,
    },
    missions: { // Mission being carried out at launch
        name: {
            type: String,
            required: true
        },
        description: {
            type: String
        },
        typeName: {
            type: String
        }
    },
    status: {
        type: Number,
        required: true,
    },
    holdreason: {
        type: String
    },
    failreason: {
        type: String
    },
    windowstart: {
        type: String,
        required: true,
    },
    windowend: {
        type: String,
        required: true,
    },
    infoURLs: {
        type: String
    },
    vidURLs: {
        type: String
    },
});

// Tell mongoose to create a real model from our schema and export it
module.exports = mongoose.model('Launch', launchSchema);
