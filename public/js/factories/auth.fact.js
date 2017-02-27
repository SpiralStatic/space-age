angular
    .module('SpaceAgeApp')
    .factory('Auth', AuthFactory)
    .run(function() {
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyA7Sulh1Qhpj6OFY01XbKGTOAOY9h6S6KA",
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
