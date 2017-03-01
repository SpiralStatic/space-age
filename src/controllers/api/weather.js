var request = require('request');

function showWeather(req, res) {
    console.log("showWeather()");
    var weatherAPI = process.env.WEATHERAPI;
    var lat = req.query.lat;
    var lon = req.query.lon;
    console.log(req.query)
    request('api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&APPID=' + weatherAPI, function(error, response, weather) {
        console.log(weather);
        if (error) return res.status(500).json({
            error: error.message
        });
        res.status(200).json(launches);
    });
}

module.exports = {
    show: showWeather
};
