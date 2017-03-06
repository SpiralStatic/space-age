angular
    .module('SpaceAgeApp')
    .factory('News', NewsFactory);

/* Asks backend API for news article/s */
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
