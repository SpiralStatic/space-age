angular
    .module('SpaceAgeApp')
    .factory('Launch', LaunchFactory);

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
