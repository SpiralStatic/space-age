var app = angular
    .module('SpaceAgeApp');

app.filter('convertStatusCode', function() {
    return function(input) {
        var codes = ['Green', 'Red', 'Succes', 'Fail'];
        return codes[input];
    };
});
