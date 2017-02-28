angular
    .module('SpaceAgeApp')
    .controller('AuthController', AuthController);

function AuthController(Auth, User, $scope) {
    var self = this;

    self.createUser = function() {
        Auth.$createUserWithEmailAndPassword(self.email, self.password)
            .then(function(user) {
                console.log(user);
                resetCredentials();
                User.create({
                    'uid': user.uid,
                    'favorites': []
                }).then(function(dbUser) {

                }).catch(function (dbError) {
                    self.error = dbError;
                })
            })
            .catch(function(error) {
                self.error = error;
            });
    };

    self.signIn = function() {
        console.log("Sign in attempt");
        Auth.$signInWithEmailAndPassword(self.email, self.password)
            .then(function(user) {
                console.log(user);
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
        self.user = user;
    });

    function resetCredentials() {
        self.email = "";
        self.password = "";
    }

//////////////////////////////////////////////////////////////////
    // $scope.loginHidden = LoginService.sharedObject.loginHidden;
    //
    self.loginShow = function() {
        $scope.isHidden = false;
        console.log("loginShow: " + $scope.isHidden);
        // $scope.loginHidden = false;
        // console.log(LoginService.sharedObject);
        // console.log("loginHidden: " + $scope.loginHidden);
    };
}
