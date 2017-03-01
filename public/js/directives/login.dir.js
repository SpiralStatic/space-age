angular
    .module('SpaceAgeApp')
    .directive('login', LoginDirective);

function LoginDirective() {
    return {
        restrict: 'E',
        templateUrl: 'js/directives/login.dir.html',
        scope: {
            show: '='
        }
    };
}
