angular
    .module('SpaceAgeApp', ['ui.router', 'firebase', 'uiGmapgoogle-maps'])
    .constant('API', 'http://localhost:3000/api')
    .config(MainRouter)
    .run(AuthCatcher);

function MainRouter($stateProvider, $urlRouterProvider, $locationProvider, uiGmapGoogleMapApiProvider) {

    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyDqeYhEcDEw7fQH-N8vE0eXrlgHDjU7gJA',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });

    var authRequired = {
        currentAuth: function(Auth) {
            return Auth.$requireSignIn();
        }
    };

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
            },
            resolve: authRequired
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
            },
            resolve: authRequired
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
        })
        .state('news', {
            url: '/news',
            views: {
                '': {
                    templateUrl: '/states/news/index.html'
                },
                'navbar@news': {
                    templateUrl: '/states/partials/_navbar.html'
                }
            }
        })
        .state('profile', {
            url: '/profile',
            views: {
                '': {
                    templateUrl: '/states/users/show.html'
                },
                'navbar@profile': {
                    templateUrl: '/states/partials/_navbar.html'
                }
            }
        })
        .state('editprofile', {
            url: '/editprofile',
            views: {
                '': {
                    templateUrl: '/states/users/edit.html'
                },
                'navbar@editprofile': {
                    templateUrl: '/states/partials/_navbar.html'
                }
            }
        });

    $urlRouterProvider.otherwise('/');

    // $locationProvider.html5Mode(true);
    // $locationProvider.hashPrefix('!');
}

function AuthCatcher($rootScope, $state) {
    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
        if (error === "AUTH_REQUIRED") $state.go('register');
    });
}
