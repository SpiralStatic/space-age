var app = angular
    .module('SpaceAgeApp');

app.filter('convertStatusCode', function() {
    return function(input) {
        var codes = ['Green', 'Red', 'Succes', 'Fail'];
        return codes[input];
    };
});

app.filter('stripTimeWindow', function() {
    return function(input) {
        var date = new Date(input).toDateString().substring(4);
        var time = new Date(input).toLocaleTimeString();
        time = time.substring(0,4).concat(time.substring(7));
        return date + ' ' + time;
    };
});
