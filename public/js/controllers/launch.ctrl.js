angular
    .module('SpaceAgeApp')
    .controller('LaunchController', LaunchController);

function LaunchController(Launch, Weather, $stateParams) {
    var self = this;
    self.launches = [];
    self.launch = {};
    self.center = {};

    self.getLaunches = function() {
        Launch.getAll()
            .then(function(response) {
                self.launches = response.data.launches;
            })
            .catch(function(error) {
                self.error = error;
            });
    };

    self.getLaunch = function() {
        var id = $stateParams.id;
        console.log(id);

        Launch.get(id)
            .then(function(response) {
                console.log(response);
                self.launch = response.data.launches[0];
                self.center = {
                    latitude: self.launch.location.pads[0].latitude,
                    longitude: self.launch.location.pads[0].longitude
                };
                console.log("LAUNCH", self.center);
            })
            .catch(function(error) {
                self.error = error;
            });
    };
}
