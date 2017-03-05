angular
    .module('SpaceAgeApp')
    .factory('News', NewsFactory);

function NewsFactory(API, $http) {
    return {
        getAll: function() {
            return $http.get(API + '/news');
        },
        get: function(id) {
            return $http.get(API + '/news/' + id);
        }
    };
}
