angular
    .module('SpaceAgeApp')
    .controller('AuthController', AuthController);

/* Authorisation controller using firebase to track users credentials */
function AuthController(Auth, User, $scope, $state, LoginService, UserService) {
    var self = this;
    self.isHidden = LoginService.isHidden; // Toggle login modal service
    self.user = UserService.user; // Set firebase user service

    /* Creates a new user with firebase and adds them to the database */
    self.createUser = function() {
        Auth.$createUserWithEmailAndPassword(self.email, self.password)
            .then(function(user) {
                resetCredentials();

                User.create({
                    'uid': user.uid,
                    'favorites': []
                }).then(function(dbUser) {
                    self.theUser = user;
                }).catch(function(dbError) {
                    self.error = dbError;
                });

                $state.go('home');
            })
            .catch(function(error) {
                self.error = error;
            });
    };

    /* Signs in an exisiting user to firebase */
    self.signIn = function() {
        Auth.$signInWithEmailAndPassword(self.email, self.password)
            .then(function(user) {
                resetCredentials();
                $state.go('home');
            })
            .catch(function(error) {
                self.error = error;
            });
    };

    /* Signs in an exisiting user to firebase using their google account */
    /* | OR | Registers a user if they don't exist */
    self.googleSignIn = function() {
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
            .signInWithPopup(provider)
            .then(function(result) {
                var user = result.user;
                User.get(user.uid)
                    .then(function(dbUser) {
                        $state.go('home');
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

    /* Signs out a user and redirects them to the homepage */
    self.signOut = function() {
        Auth.$signOut();

        $state.go('home');
    };

    /* Allows a user to update their email / password */
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
                    self.error = error;
                });
        }

        if (user.password !== newPassword) {
            user.updatePassword(newPassword)
                .then(function() {

                })
                .catch(function(error) {
                    self.error = error;
                });
        }
        resetCredentials();
    };

    /* Watches if user authorisation changes */
    Auth.$onAuthStateChanged(function(user) {
        self.user = user;
        UserService.setUser(user);
    });

    /* Resets the users credentials for security */
    function resetCredentials() {
        self.email = "";
        self.password = "";
    }

    /* Toggle modal view */
    self.toggleLogin = function() {
        LoginService.toggle();
        self.isHidden = LoginService.isHidden;
    };

    /* Watch if login modal boolean changes */
    $scope.$watch(function() {
        return LoginService.isHidden;
    }, function(newVal, oldVal) {
        if (newVal !== oldVal) self.isHidden = newVal;
    });
}
