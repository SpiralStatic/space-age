angular
    .module('SpaceAgeApp', ['ui.router', 'firebase'])
    .constant('API', 'http://localhost:3000')
    .config(MainRouter);

function MainRouter($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/',
            views: {
                '': {
                    templateUrl: '/states/home.html'
                },
                'navbar@home': {
                    templateUrl: '/states/partials/_navbar.html'
                }
            }
        })
        .state('launches', {
            url: '/launches',
            views: {
                '': {
                    templateUrl: '/states/launches/index.html'
                },
                'navbar@home': {
                    templateUrl: '/states/partials/_navbar.html'
                }
            }
        })
        .state('showlaunch', {
            url: '/launches/:id',
            views: {
                '': {
                    templateUrl: '/states/launches/show.html'
                },
                'navbar@home': {
                    templateUrl: '/states/partials/_navbar.html'
                }
            }
        });

    $urlRouterProvider.otherwise('/');
}
