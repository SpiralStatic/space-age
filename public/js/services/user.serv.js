angular
    .module('SpaceAgeApp')
    .factory('UserService', UserService);

/* Allows needed parties to know the current logged in user */
function UserService() {
    var self = this;
    self.user = {};

    self.setUser = function(newUser) {
        self.user = newUser; // Set new user status
    };

    return self;
}
