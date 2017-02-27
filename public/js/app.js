angular
    .module('SpaceAgeApp', ['ui.router'])
    .config(MainRouter);

function MainRouter($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/states/home.html',
        })
        .state('launches', {
            url: '/launches',
            templateUrl: '/states/launches/index.html',
        })
        .state('showlaunch', {
            url: '/launches/:id',
            templateUrl: '/states/launches/show.html',
        });

    $urlRouterProvider.otherwise('/');
}
