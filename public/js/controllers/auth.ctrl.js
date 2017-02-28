angular
    .module('SpaceAgeApp')
    .controller('AuthController', AuthController);

function AuthController(Auth, $scope, LoginService) {
    var self = this;

    self.createUser = function() {
        Auth.$createUserWithEmailAndPassword(self.email, self.password)
            .then(function(user) {
                resetCredentials();
                
            })
            .catch(function(error) {
                self.error = error;
            });
    };

    self.signIn = function() {
        Auth.$signInWithEmailAndPassword(self.email, self.password)
            .then(function(user) {
                resetCredentials();
            })
            .catch(function(error) {
                self.error = error;
            });
    };

    self.signOut = function() {
        Auth.$signOut();
        $state.go('home');
    };

    Auth.$onAuthStateChanged(function(user) {
        console.log(user);
        self.user = user;
    });

    function resetCredentials() {
        self.email = "";
        self.password = "";
    }

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
