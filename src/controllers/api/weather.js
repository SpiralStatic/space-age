var request = require('request');

function showWeather(req, res) {
    console.log("showWeather()");
    let lat = req.query.lat;
    let lon = req.query.lon;
    request(`api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}`, function(error, response, weather) {
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
