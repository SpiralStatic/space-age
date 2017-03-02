angular
    .module('SpaceAgeApp')
    .controller('UserController', UserController);

function UserController(User) {
    let self = this;

    self.getUser = function(userId) {
        console.log("Got User: " + userId);
    };
}
