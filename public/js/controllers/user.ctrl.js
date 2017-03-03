angular
    .module('SpaceAgeApp')
    .controller('UserController', UserController);

function UserController(User) {
    var self = this;

    self.getUser = function() {
        console.log("Got User");
    };
}
