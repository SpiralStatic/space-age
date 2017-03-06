angular
    .module('SpaceAgeApp')
    .directive('launch', LaunchDirective);

function LaunchDirective() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'js/directives/launch.dir.html',
        scope: {
            id: '=',
            name: '=',
            location: '=',
            rockets: '=',
            missions: '=',
            status: '=',
            holdreason: '=',
            failreason: '=',
            windowstart: '=',
            windowend: '=',
            infoURLs: '=',
            vidURLs: '=',
            weather: '=',
            addtofavorites:'&'
        }
    };
}
