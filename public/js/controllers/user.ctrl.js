angular
    .module('SpaceAgeApp')
    .controller('UserController', UserController);

function UserController(User, UserService) {
    var self = this;
    self.user = UserService.user;

    self.getUser = function() {
        console.log(self.user);
        User.get(self.user.uid)
            .then(function(response) {
                console.log("ok");
            })
            .catch(function(error) {
                self.error = error;
            });
    };

    self.editSubmit = function() {
        $state.go('profile');
    };

}
