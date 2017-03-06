var app = angular
    .module('SpaceAgeApp');

/* Converts given launch status [0,1,2,3] to related code */
app.filter('convertStatusCode', function() {
    return function(input) {
        var codes = ['Green', 'Red', 'Succes', 'Fail'];
        return codes[input];
    };
});

/* Takes time window, or other date string and converts it to a more readable string */
app.filter('stripTimeWindow', function() {
    return function(input) {
        var date = new Date(input).toDateString().substring(4);
        var time = new Date(input).toLocaleTimeString();
        time = time.substring(0, 4).concat(time.substring(7));
        return date + ' ' + time;
    };
});

/* Converts the given weather icon code into the responding weatherIcon icon */
app.filter('convertIcon', function() {
    return function(input) {
        var iconReference = [{
            apiIcon: ['01d'],
            icon: 'wi-day-sunny'
        }, {
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
            icon: 'wi-night-fog'
        }, {
            apiIcon: ['na'],
            icon: 'wi-na'
        }];

        var output = iconReference.filter(function(icon, i) {
            if(icon.apiIcon.indexOf(input) !== -1) return i; // If match, return
        });

        if(output.length === 0) return iconReference[(iconReference.length - 1)].icon; // Else N/A

        return output[0].icon;
    };
});

/* Capitalises each word of a given string (For use with the weather description)*/
app.filter('capitaliseWords', function() {
    return function(input) {
        var string = input.split(' ');
        for(var word in string) {
            string[word] = string[word][0].toUpperCase() + string[word].slice(1);
        }
        return string.join(' ');
    };
});
