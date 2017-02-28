angular
    .module('SpaceAgeApp')
    .factory('LoginService', LoginService);

function LoginService() {
    return {
        sharedObject: {
            loginHidden: '',
        }
    };
}
