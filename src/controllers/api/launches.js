//var Launch = require('../../models/launch.js');
var rpromise = require('request-promise');
var weatherAPI = process.env.WEATHERAPI;

function indexLaunches(req, res) {
    var launchOptions = {
        uri: 'http://www.launchlibrary.net/1.2/launch/next/' + req.query.launchsize,
        headers: {
            'User-Agent': 'Mozilla/5.0'
        },
        json: true // Automatically parses the JSON string in the response
    };

    rpromise(launchOptions)
        .then(function(response) {
            var completedResponses = 0;

            for (var i = 0; i < response.launches.length; i++) {

                var pad = response.launches[i].location.pads[0];

                var weatherOptions = {
                    uri: 'http://api.openweathermap.org/data/2.5/weather',
                    qs: {
                        lat: pad.latitude,
                        lon: pad.longitude,
                        APPID: weatherAPI
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
                                res.status(200).json(response);
                            } else {
                                completedResponses++;
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

function showLaunch(req, res) {
    var launchOptions = {
        uri: 'http://launchlibrary.net/1.2/launch/' + req.params.id,
        headers: {
            'User-Agent': 'Mozilla/5.0'
        },
        json: true // Automatically parses the JSON string in the response
    };

    rpromise(launchOptions)
        .then(function(response) {
            var pad = response.launches[0].location.pads[0];

            var weatherOptions = {
                uri: 'http://api.openweathermap.org/data/2.5/weather',
                qs: {
                    lat: pad.latitude,
                    lon: pad.longitude,
                    APPID: weatherAPI
                },
                headers: {
                    'User-Agent': 'Request-Promise'
                },
                json: true // Automatically parses the JSON string in the response
            };

            rpromise(weatherOptions)
                .then(function(weatherResponse) {
                    response.launches[0].weather = weatherResponse;

                    res.status(200).json(response);
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
