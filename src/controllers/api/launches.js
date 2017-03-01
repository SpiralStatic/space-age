//var Launch = require('../../models/launch.js');
var request = require('request');

function indexLaunches(req, res) {
    var request_options = {
        headers: {'user-agent': 'Mozilla/5.0'}
    };

    request('http://www.launchlibrary.net/1.2/launch/next/5', request_options,  function(error, response, launches) {
        if (error) return res.status(500).json({
            error: error.message
        });

        var weatherAPI = process.env.WEATHERAPI;
        var pad = JSON.parse(launches).launches[0].location.pads[0];

        request('http://api.openweathermap.org/data/2.5/weather?lat=' + pad.latitude + '&lon=' + pad.longitude + '&APPID=' + weatherAPI, function(error, response, weather) {
            console.log(weather);
            if (error) return res.status(500).json({
                error: error.message
            });
            launches.weather = weather;
            console.log("Weather: " + launches.weather);

            res.status(200).json(launches);
        });
    });
}

module.exports = {
    index: indexLaunches
};
