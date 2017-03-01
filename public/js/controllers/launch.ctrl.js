angular
    .module('SpaceAgeApp')
    .controller('LaunchController', LaunchController);

function LaunchController(Launch) {
    let self = this;
    let launches = [];
    let launch = {};

    self.getLaunches = function() {
        self.launches = Launch.getAll();
        console.log(self.launches);
    };

    self.getLaunch = function(launchID) {
        console.log("Got Launch: " + launchID);
    };
}
