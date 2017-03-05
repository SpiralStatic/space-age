angular
    .module('SpaceAgeApp')
    .directive('news', NewsDirective);

function NewsDirective() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'js/directives/news.dir.html',
        scope: {

        }
    };
}
