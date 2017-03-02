angular
    .module('SpaceAgeApp')
    .controller('LaunchController', LaunchController);

function LaunchController(Launch, Weather) {
    let self = this;
    self.launches = [];
    self.launch = {};

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

    self.getLaunch = function(launchId) {
        console.log("Got Launch: " + launchId);
    };
}
