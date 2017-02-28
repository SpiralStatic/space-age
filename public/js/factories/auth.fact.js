angular
    .module('SpaceAgeApp')
    .factory('Auth', AuthFactory)
    .run(function() {
        // Initialize Firebase
        var config = {
            apiKey: process.env.FIREBASEAPI,
            authDomain: "spaceageapp.firebaseapp.com",
            databaseURL: "https://spaceageapp.firebaseio.com",
            storageBucket: "spaceageapp.appspot.com",
            messagingSenderId: "768479383812"
        };
        firebase.initializeApp(config);
    });

function AuthFactory($firebaseAuth) {
    return $firebaseAuth();
}
