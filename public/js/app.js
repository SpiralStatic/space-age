angular
    .module('SpaceAgeApp', ['ui.router', 'firebase'])
    .constant('API', 'http://localhost:3000/api')
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
                'navbar@launches': {
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
                'navbar@showlaunch': {
                    templateUrl: '/states/partials/_navbar.html'
                }
            }
        })
        .state('login', {
            url: '/login',
            views: {
                '': {
                    templateUrl: '/states/login.html'
                },
                'navbar@login': {
                    templateUrl: '/states/partials/_navbar.html'
                }
            }
        })
        .state('register', {
            url: '/register',
            views: {
                '': {
                    templateUrl: '/states/register.html'
                },
                'navbar@register': {
                    templateUrl: '/states/partials/_navbar.html'
                }
            }
        });

    $urlRouterProvider.otherwise('/');
}
