angular
    .module('SpaceAgeApp')
    .controller('UserController', UserController);

function UserController(User, $state) {
    var self = this;

    self.getUser = function() {
        console.log("Got User");
    };

    self.editSubmit = function() {
        $state.go('profile');
    };
}
