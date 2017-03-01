angular
    .module('SpaceAgeApp')
    .controller('LaunchController', LaunchController);

function LaunchController(Launch) {
    let self = this;
    let launches = [];
    let launch = {};

    self.getLaunches = function() {
        launches = Launch.getAll();
        console.log(launches);
    };

    self.getLaunch = function(launchID) {
        console.log("Got Launch: " + launchID);
    };
}
