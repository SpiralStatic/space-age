var request = require('request');

function showWeather(req, res) {
    console.log("showWeather()");
    let weatherAPI = process.env.WEATHERAPI;
    let lat = 12.4;//req.query.lat;
    let lon = 13.5;//req.query.lon;
    request(`api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${weatherAPI}`, function(error, response, weather) {
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
