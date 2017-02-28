angular
    .module('SpaceAgeApp')
    .controller('AuthController', AuthController);

function AuthController(Auth, $scope, LoginService) {
    var self = this;
    $scope.loginHidden = LoginService.sharedObject.loginHidden;

    self.loginShow = function() {
        $scope.loginHidden = false;
        console.log(LoginService.sharedObject);
        console.log("loginHidden: " + $scope.loginHidden);
    };

    self.loginHide = function() {
        $scope.loginHidden = true;
    };
}
