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
            templateUrl: '/states/launches.html',
        });

    $urlRouterProvider.otherwise('/');
}
