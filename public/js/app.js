angular
    .module('SpaceAgeApp', ['ui.router', 'firebase', 'uiGmapgoogle-maps'])
    .constant('API', 'http://localhost:3000/api')
    .config(MainRouter)
    .run(AuthCatcher, FragmentCatcher);

/* Main Router that controls states and the movement between them */
function MainRouter($stateProvider, $urlRouterProvider, $locationProvider, uiGmapGoogleMapApiProvider) {

    /* Set up google maps API with needed settings, including key */
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyDqeYhEcDEw7fQH-N8vE0eXrlgHDjU7gJA',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });

    /* Function to check authorisation */
    var authRequired = {
        currentAuth: function(Auth) {
            return Auth.$requireSignIn();
        }
    };

    /* Determines available states */
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
        })
        .state('favorites', {
            url: '/favorites',
            views: {
                '': {
                    templateUrl: '/states/users/index.html'
                },
                'navbar@favorites': {
                    templateUrl: '/states/partials/_navbar.html'
                }
            }
        });

    $urlRouterProvider.otherwise('/'); // Else route to root ('home')

    // $locationProvider.html5Mode(true);
}

/* At state change determines if user is authorised */
function AuthCatcher($rootScope, $state) {
    $rootScope.$on('$stateChangeError',
        function(event, toState, toParams, fromState, fromParams, error) {
            if (error === "AUTH_REQUIRED") $state.go('register'); // If not authorised route to register state
        });
}

/* Catches if # is within URL for fragment viewing */
function FragmentCatcher($rootScope, $state) {
    $rootScope.$on('$stateChangeStart',
        function(event, toState, toParams, fromState, fromParams) {
            var hash = $location.hash();
            if (hash) toParams['#'] = hash;
        }
    );
}
