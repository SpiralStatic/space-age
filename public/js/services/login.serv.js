angular
    .module('SpaceAgeApp')
    .factory('LoginService', LoginService);

/* Allows needed to controllers to know current state of login modal */
function LoginService() {
    var self = this;

    self.isHidden = false; // Initially false (Dont display)

    self.toggle = function(){
        self.isHidden = !self.isHidden; // Switch modal booelan value
    };

    return self;
}
