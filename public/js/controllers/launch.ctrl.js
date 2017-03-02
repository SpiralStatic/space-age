angular
    .module('SpaceAgeApp')
    .controller('LaunchController', LaunchController);

function LaunchController(Launch, Weather) {
    let self = this;
    self.launches = [];
    self.launch = {};
    self.weather = {};

    self.getLaunches = function() {
        Launch.getAll()
            .then(function(response) {
                self.launches = response.data.launches;
                console.log(self.launches);
            })
            .catch(function(error) {
                self.error = error;
            });
    };

    self.getLaunch = function(launchID) {
        console.log("Got Launch: " + launchID);
    };

    self.getWeather = function(lat, lon) {
        Weather.get(lat, lon)
            .then(function(response) {
                self.weather = response.data;
                console.log(self.weather);
            })
            .catch(function(error) {
                self.error = error;
            });
        self.weather = {};
    };
}
