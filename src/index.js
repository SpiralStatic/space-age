var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');

var routes = require('./config/routes.js');

var app = express();

// Use public resource folder
app.use(express.static('../public'));

// Connect to the database
mongoose.connect('mongodb://localhost/spaceage', function() {
    console.log("Database is now connected");
});

// Body Parser
app.use(bodyParser.urlencoded({
    extended: false
}));

// Method Override
app.use(methodOverride(function(req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method;
        delete req.body._method;
        return method;
    }
}));

// Set the view engine to be ejs
app.set('view engine', 'ejs');

// Add the router
app.use(routes);

// Start server
app.listen(3000, function() {
    console.log("Server Started. Listening on port 3000");
});

module.exports = app;
