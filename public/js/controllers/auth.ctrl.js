angular
    .module('SpaceAgeApp')
    .controller('AuthController', AuthController);

function AuthController(Auth, User, $scope, $state, LoginService) {
    var self = this;
    self.isHidden = LoginService.isHidden;

    self.createUser = function() {
        Auth.$createUserWithEmailAndPassword(self.email, self.password)
            .then(function(user) {
                resetCredentials();

                User.create({
                    'uid': user.uid,
                    'favorites': []
                }).then(function(dbUser) {

                }).catch(function(dbError) {
                    self.error = dbError;
                });
            })
            .catch(function(error) {
                self.error = error;
            });
    };

    self.signIn = function() {
        console.log("Sign in attempt");
        Auth.$signInWithEmailAndPassword(self.email, self.password)
            .then(function(user) {
                resetCredentials();
                $state.go('home');
            })
            .catch(function(error) {
                console.log(error);
                self.error = error;
            });
    };

    self.googleSignIn = function() {
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
            .signInWithPopup(provider)
            .then(function(result) {
                var user = result.user;
                User.get(user.uid)
                    .then(function(dbUser) {

                    })
                    .catch(function(dbError) {
                        if (dbError.status === 404) {
                            User.create({
                                'uid': user.uid,
                                'favorites': []
                            }).then(function(user) {
                                console.log(user);
                            });
                        } else {
                            self.error = dbError;
                        }
                    });
            })
            .catch(function(error) {
                self.error = error;
            });
    };

    self.signOut = function() {
        Auth.$signOut();

        $state.go('home');
    };

    self.updateCredentials = function() {
        var user = firebase.auth().currentUser;
        var newEmail = self.email;
        var newPassword = self.password;

        if (user.email !== newEmail) {
            user.updateEmail(newEmail)
                .then(function() {
                    // Update successful.
                })
                .catch(function(error) {
                    console.log(error);
                    // An error happened.
                });
        }

        if (user.password !== newPassword) {
            user.updatePassword(newPassword)
                .then(function() {
                    resetCredentials();
                })
                .catch(function(error) {
                    console.log(error);
                    // An error happened.
                });
        }
    };

    Auth.$onAuthStateChanged(function(user) {
        self.user = user;
    });

    function resetCredentials() {
        self.email = "";
        self.password = "";
    }

    self.toggleLogin = function() {
        LoginService.toggle();
        self.isHidden = LoginService.isHidden;
    };

    $scope.$watch(function() {
        return LoginService.isHidden;
    }, function(newVal, oldVal) {
        if (newVal !== oldVal) self.isHidden = newVal;
    });
}
