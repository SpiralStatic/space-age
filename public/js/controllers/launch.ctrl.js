angular
    .module('SpaceAgeApp')
    .controller('LaunchController', LaunchController);

/* Launch Controller used to manipulate launches on the front end and retrieve them from the backend */
function LaunchController(Launch, Weather, User, $stateParams, UserService) {
    var self = this;
    self.user = UserService.user; // Currently logged in user passed from Auth via service
    self.launches = []; // Array of launches
    self.launch = {}; // Single launch object
    self.launchCounter = 6; // Counter for number of launches to retrieve
    self.center = {}; // Coordinates for google map to center on

    /* Asks the Launch factory to retrieve launches equal to the launchCounter */
    self.getLaunches = function() {
        Launch.getAll(self.launchCounter)
            .then(function(response) {
                self.launches = response.data.launches; // Launches as array
                self.launchCounter += 3; // Increment launch counter to get upon next consecutive request
            })
            .catch(function(error) {
                self.error = error;
            });
    };

    /* Gets a single launch based on the id passed through the $stateParams */
    /* Also sets the google map center from the retrieved data */
    self.getLaunch = function() {
        var id = $stateParams.id;
        console.log("das");
        Launch.get(id)
            .then(function(response) {
                self.launch = response.data.launches[0]; // Individual launch
                self.center = {
                    latitude: self.launch.location.pads[0].latitude, // Coords lat
                    longitude: self.launch.location.pads[0].longitude // Coords lon
                };
            })
            .catch(function(error) {
                self.error = error;
            });
    };

    /* Adds a launch to the current logged in users favorites */
    self.addToFavorites = function(index) {
        User.update(self.user.uid, updatedUser = { // Updates current user
                favorites: {
                    launchId: self.launches[index].id // Sends new launch to be favorited
                }
            })
            .then(function(response) {

            })
            .catch(function(error) {
                self.error = error;
            });
    };
}
