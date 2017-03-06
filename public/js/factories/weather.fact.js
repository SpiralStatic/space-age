angular
    .module('SpaceAgeApp')
    .factory('Weather', WeatherFactory);

/* Asks backend API for weather at location (Coordinates) */
function WeatherFactory(API, $http) {
    return {
        get: function(lat, lon) {
            return $http.get(API + '/weather?lat=' + lat + '&lon=' + lon);
        }
    };
}
