var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
//var morgan = require('morgan');

var routes = require('./config/routes.js');

var app = express();

// Use public resource folder
app.use(express.static('../public'));

// Connect to the database
mongoose.connect('mongodb://localhost/spaceage', function() {
    console.log("Database is now connected");
});

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// Set the view engine to be ejs
app.set('view engine', 'ejs');

// Add the router
app.use(routes);

//app.use(morgan('dev'));

// Start server
app.listen(3000, function() {
    console.log("Server Started. Listening on port 3000");
});

module.exports = app;
