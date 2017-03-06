angular
    .module('SpaceAgeApp')
    .controller('LaunchController', LaunchController);

function LaunchController(Launch, Weather, User, $stateParams) {
    var self = this;
    self.launches = [];
    self.launch = {};
    self.launchCounter = 6;
    self.center = {};

    self.getLaunches = function() {
        Launch.getAll(self.launchCounter)
            .then(function(response) {
                self.launches = response.data.launches;
                self.launchCounter += 3;
            })
            .catch(function(error) {
                self.error = error;
            });
    };

    self.getLaunch = function() {
        var id = $stateParams.id;

        Launch.get(id)
            .then(function(response) {
                self.launch = response.data.launches[0];
                self.center = {
                    latitude: self.launch.location.pads[0].latitude,
                    longitude: self.launch.location.pads[0].longitude
                };
            })
            .catch(function(error) {
                self.error = error;
            });
    };

    self.addToFavorites = function() {
        var user = firebase.auth().currentUser;
        var id = $stateParams.id;

        User.update(user.uid, id)
            .then(function(response) {
                console.log(response);
            })
            .catch(function(error) {
                self.error = error;
            });
    };
}
