angular
    .module('SpaceAgeApp')
    .directive('login', LoginDirective);

function LoginDirective() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'js/directives/login.dir.html',
        scope: {
            isHidden: '='
        },
        link: function(scope, element, attr) {

            scope.$watch(scope.isHidden, function() {
                console.log(scope.isHidden);
                if(!scope.isHidden) {
                    element.addClass('active');
                } else {
                    element.removeClass('active');
                }
            });

            scope.loginHide = function() {
                scope.isHidden = true;
                console.log("loginHide: " + scope.isHidden);
                //$scope.loginHidden = true;
            };
        }
    };
}
