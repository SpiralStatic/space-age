angular
    .module('SpaceAgeApp')
    .factory('LoginService', LoginService);

function LoginService() {
    var self = this;

    self.isHidden = false;

    self.toggle = function(){
        self.isHidden = !self.isHidden;
    };

    return self;
}
