angular
    .module('SpaceAgeApp')
    .factory('User', UserFactory);

/* Asks for and sends user related data to the backend API */
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
