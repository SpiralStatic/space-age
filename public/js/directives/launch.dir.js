angular
    .module('SpaceAgeApp')
    .directive('launch', LaunchDirective);

function LaunchDirective() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'js/directives/launch.dir.html',
        scope: {
            name: '=',
            locations: [{
                name: '=',
                latitude: '=',
                longitude: '=',
                wikiURL: '=',
                agencies: {
                    name: '=',
                    infoURLs: '='
                }
            }],
            rockets: [{
                name: '=',
                wikiURL: '=',
                imageURL: '='
            }],
            missions: [{
                name: '=',
                description: '=',
                typeName: '='
            }],
            status: '=',
            holdreason: '=',
            failreason: '=',
            windowstart: '=',
            windowend: '=',
            infoURLs: '=',
            vidURLs: '='
        }
    };
}
