angular
    .module('SpaceAgeApp')
    .controller('UserController', UserController);

function UserController(User, UserService) {
    var self = this;
    self.user = UserService.user;
    self.userDetails = {};

    self.getUser = function() {
        User.get(self.user.uid)
            .then(function(response) {
                self.userDetails = response.data;
                console.log(self.userDetails);
            })
            .catch(function(error) {
                self.error = error;
            });
    };
}
