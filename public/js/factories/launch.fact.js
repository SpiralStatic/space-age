angular
    .module('SpaceAgeApp')
    .factory('Launch', LaunchFactory);

/* Asks backend API for launch/es */
function LaunchFactory(API, $http) {
    return {
        getAll: function(launchSize) {
            return $http.get(API + '/launches/?launchsize=' + launchSize);
        },
        get: function(id) {
            return $http.get(API + '/launches/' + id);
        }
    };
}
