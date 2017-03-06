angular
    .module('SpaceAgeApp')
    .controller('UserController', UserController);

/* User Controller used to retrive user details from backend */
function UserController(User, UserService) {
    var self = this;
    self.user = UserService.user; // Currently logged in user passed from Auth via service
    self.userDetails = {}; // User details

    self.getUser = function() {
        User.get(self.user.uid) // Get currently logged in user database equivalent
            .then(function(response) {
                self.userDetails = response.data; // Set user details
            })
            .catch(function(error) {
                self.error = error;
            });
    };
}
