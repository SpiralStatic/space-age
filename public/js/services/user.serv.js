angular
    .module('SpaceAgeApp')
    .factory('UserService', UserService);

function UserService() {
    var self = this;
    self.user = {};

    self.setUser = function(newUser) {
        self.user = newUser;
        console.log(self.user);
    };

    return self;
}
