angular
    .module('SpaceAgeApp')
    .factory('Launch', LaunchFactory);

function LaunchFactory(API, $http) {
    return {
        getAll: function() {
            return $http.get(API + '/launches');
        },
        get: function(id) {
            return $http.get(API + '/launches/' + id);
        }
    };
}
