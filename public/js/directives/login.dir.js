angular
    .module('SpaceAgeApp')
    .directive('login', LoginDirective);

/* Details the type and scope of the login directive (Login Modal)*/
function LoginDirective() {
    return {
        restrict: 'E',
        templateUrl: 'js/directives/login.dir.html',
        scope: {
            show: '='
        }
    };
}
