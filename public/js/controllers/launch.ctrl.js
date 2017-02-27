angular
    .module('SpaceAgeApp')
    .controller('LaunchController', LaunchController);

function LaunchController() {
    let self = this;
    let launch = {};

    self.getLaunches = function() {
        console.log("Launches");
    };

    self.getLaunch = function(launchID) {
        console.log("Got Launch: " + launchID);
    };
}
