var rpromise = require('request-promise');
var weatherAPI = process.env.WEATHERAPI;

/* Gets from the launchlibrary.net API and openweathermap API the launch details of a number of launches */
function indexLaunches(req, res) {
    /* launchlibrary.net request options */
    var launchOptions = {
        uri: 'http://www.launchlibrary.net/1.2/launch/next/' + req.query.launchsize, // URI
        headers: {
            'User-Agent': 'Mozilla/5.0' // Browser required to interact with API
        },
        json: true // Automatically parses the JSON string in the response
    };

    rpromise(launchOptions)
        .then(function(response) {
            var completedResponses = 0; // Check responses to ensure they are all complete before moving on

            /* Loop through all the launches */
            for (var i = 0; i < response.launches.length; i++) {

                var pad = response.launches[i].location.pads[0]; // Get their location

                /* openweathermap.org request options */
                var weatherOptions = {
                    uri: 'http://api.openweathermap.org/data/2.5/weather', // URI
                    qs: {
                        lat: pad.latitude, // Coordinates to get weather
                        lon: pad.longitude,
                        APPID: weatherAPI // Weather API key
                    },
                    headers: {
                        'User-Agent': 'Request-Promise'
                    },
                    json: true // Automatically parses the JSON string in the response
                };

                rpromise(weatherOptions)
                    .then((function(j) {
                        return function(weatherResponse) {
                            response.launches[j].weather = weatherResponse;

                            if (completedResponses === (response.launches.length - 1)) {
                                res.status(200).json(response); // Send response when all data is retrieved
                            } else {
                                completedResponses++; // If not all done, increment
                            }
                        };
                    })(i))
                    .catch(function(error) {
                        return res.status(500).json({
                            error: error.message
                        });
                    });
            }
        })
        .catch(function(error) {
            return res.status(500).json({
                error: error.message
            });
        });
}

/* Gets from the launchlibrary.net API and openweathermap API the launch details of a single launch */
function showLaunch(req, res) {
    /* launchlibrary.net request options */
    var launchOptions = {
        uri: 'http://launchlibrary.net/1.2/launch/' + req.params.id,
        headers: {
            'User-Agent': 'Mozilla/5.0'
        },
        json: true // Automatically parses the JSON string in the response
    };

    rpromise(launchOptions)
        .then(function(response) {
            var pad = response.launches[0].location.pads[0]; // Get its location

            /* openweathermap.org request options */
            var weatherOptions = {
                uri: 'http://api.openweathermap.org/data/2.5/weather',
                qs: {
                    lat: pad.latitude, // Coordinates to get weather
                    lon: pad.longitude,
                    APPID: weatherAPI // Weather API key
                },
                headers: {
                    'User-Agent': 'Request-Promise'
                },
                json: true // Automatically parses the JSON string in the response
            };

            rpromise(weatherOptions)
                .then(function(weatherResponse) {
                    response.launches[0].weather = weatherResponse;

                    res.status(200).json(response); // Return launch with weather
                })
                .catch(function(error) {
                    return res.status(500).json({
                        error: error.message
                    });
                });
        })
        .catch(function(error) {
            return res.status(500).json({
                error: error.message
            });
        });
}

module.exports = {
    index: indexLaunches,
    show: showLaunch
};
