angular
    .module('SpaceAgeApp')
    .directive('login', LoginDirective);

function LoginDirective() {
    return {
        restrict: 'E',
        // replace: true,
        templateUrl: 'js/directives/login.dir.html',
        scope: {
            show: '='
        }
    };
}
