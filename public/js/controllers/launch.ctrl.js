angular
    .module('SpaceAgeApp')
    .controller('LaunchController', LaunchController);

function LaunchController(Launch) {
    let self = this;
    self.launches = [];
    self.launch = {};

    self.getLaunches = function() {
        Launch.getAll()
            .then(function(response) {
                self.launches = JSON.parse(response.data).launches;
                console.log(self.launches);
            })
            .catch(function(error) {
                self.error = error;
            });
    };

    self.getLaunch = function(launchID) {
        console.log("Got Launch: " + launchID);
    };
}
