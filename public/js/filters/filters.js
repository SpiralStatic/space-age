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
        time = time.substring(0, 4).concat(time.substring(7));
        return date + ' ' + time;
    };
});

app.filter('convertIcon', function() {
    return function(input) {
        var iconReference = [{
            apiIcon: ['01d'],
            icon: 'wi-day-sunny'
        }, {
            apiIcon: ['02d'],
            icon: 'wi-day-cloudy'
        }, {
            apiIcon: ['03d', '03n'],
            icon: 'wi-cloud'
        }, {
            apiIcon: ['04d', '04n'],
            icon: 'wi-cloudy'
        }, {
            apiIcon: ['09d'],
            icon: 'wi-day-showers'
        }, {
            apiIcon: ['10d'],
            icon: 'wi-day-rain'
        }, {
            apiIcon: ['11d'],
            icon: 'wi-day-thunderstorm'
        }, {
            apiIcon: ['13d'],
            icon: 'wi-day-snow'
        }, {
            apiIcon: ['50d'],
            icon: 'wi-day-fog'
        }, {
            apiIcon: ['01n'],
            icon: 'wi-day-sunny'
        }, {
            apiIcon: ['02n'],
            icon: 'wi-night-alt-cloudy'
        }, {
            apiIcon: ['09n'],
            icon: 'wi-night-showers'
        }, {
            apiIcon: ['10n'],
            icon: 'wi-night-alt-rain'
        }, {
            apiIcon: ['11n'],
            icon: 'wi-night-alt-thunderstorm'
        }, {
            apiIcon: ['13n'],
            icon: 'wi-night-alt-snow'
        }, {
            apiIcon: ['50n'],
            icon: 'wi-day-sunny'
        }];
        var output = iconReference.filter(function(icon, i) {
            ///console.log(icon.apiIcon.indexOf(input));
            if(icon.apiIcon.indexOf(input) !== -1) return i;
        });
        console.log(output);
        return output[0].icon;
    };
});
