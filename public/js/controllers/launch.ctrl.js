angular
    .module('SpaceAgeApp')
    .controller('LaunchController', LaunchController);

function LaunchController(Launch, Weather, User, $stateParams, UserService) {
    var self = this;
    self.user = UserService.user;
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

    self.addToFavorites = function(index) {
        console.log("added to favorites");
        console.log("index", index);
        console.log("launches", self.launches);
        console.log("found", self.launches[index]);

        User.update(self.user.uid, updatedUser = {
                favorites: self.launches[index]
            })
            .then(function(response) {
                console.log(response);
            })
            .catch(function(error) {
                self.error = error;
            });
    };
}
