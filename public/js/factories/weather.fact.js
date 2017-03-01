angular
    .module('SpaceAgeApp')
    .factory('Weather', WeatherFactory);

function WeatherFactory(API, $http) {
    return {
        get: function(lat, lon) {
            return $http.get(API + '/weather?lat=' + lat + '&lon=' + lon);
        }
    };
}
