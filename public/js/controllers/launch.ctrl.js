angular
    .module('SpaceAgeApp')
    .controller('LaunchController', LaunchController);

function LaunchController(Launch, Weather, GoogleMap, $stateParams) {
    var self = this;
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

    self.getLaunch = function() {
        var id = $stateParams.id;
        console.log(id);

        Launch.get(id)
            .then(function(response) {
                console.log(response);
                self.launch = response.data.launches[0];
            })
            .catch(function(error) {
                self.error = error;
            });
    };
}
