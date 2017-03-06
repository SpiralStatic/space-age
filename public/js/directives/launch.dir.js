angular
    .module('SpaceAgeApp')
    .directive('launch', LaunchDirective);

/* Details the type and scope of the launch directive */
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
