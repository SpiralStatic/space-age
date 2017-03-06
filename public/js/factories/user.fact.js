angular
    .module('SpaceAgeApp')
    .factory('User', UserFactory);

function UserFactory(API, $http) {
    return {
        get: function(id) {
            return $http.get(API + '/users/' + id);
        },
        create: function(newUser) {
            return $http.post(API + '/users', newUser);
        },
        update: function(id, updatedUser) {
            return $http.patch(API + '/users/' + id, updatedUser);
        },
        delete: function(id) {
            return $http.delete(API + '/users/' + id);
        }
    };
}
