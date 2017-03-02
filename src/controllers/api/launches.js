//var Launch = require('../../models/launch.js');
var rpromise = require('request-promise');

function indexLaunches(req, res) {
    var launchOptions = {
        uri: 'http://www.launchlibrary.net/1.2/launch/next/5',
        headers: {
            'User-Agent': 'Mozilla/5.0'
        },
        json: true // Automatically parses the JSON string in the response
    };

    rpromise(launchOptions)
        .then(function(response) {

            var weatherAPI = process.env.WEATHERAPI;
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
                    console.log(weatherResponse);
                    response.launches.push(weatherResponse);
                    console.log("Weather: " + JSON.stringify(response.launches.weather));

                    res.status(200).json(response);
                })
                .catch(function(error) {
                    console.log(error);
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
    index: indexLaunches
};
