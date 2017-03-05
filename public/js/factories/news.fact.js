angular
    .module('SpaceAgeApp')
    .factory('News', NewsFactory);

function NewsFactory(API, $http) {
    return {
        getAll: function(pageSize) {
            return $http.get(API + '/news?pages=' + pageSize);
        },
        get: function(id) {
            return $http.get(API + '/news/' + id);
        }
    };
}
