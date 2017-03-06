angular
    .module('SpaceAgeApp')
    .directive('news', NewsDirective);

/* Details the type and scope of the news directive */
function NewsDirective() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'js/directives/news.dir.html',
        scope: {
            id: '=',
            title: '=',
            subtext: '=',
            date: '=',
            thumbnail: '=',
            url: '='
        },
        link: function(scope, element, attrs) {
            var subText = angular.element(element.find('p')[0]);
            subText.html(scope.subtext); // Find and convert trail text to html (Text comes with tags)
        }
    };
}
