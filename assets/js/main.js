var mainApp = angular.module("SadeApp", ['ngRoute']);

// configure our routes
mainApp.config(function($routeProvider) {
    $routeProvider

    // route for the home page
    .when('/#', {
        templateUrl : 'assets/html/main.html',
        controller  : 'MainCtrl'
    })

    // route for the home page as well
    .when('/', {
        templateUrl : 'assets/html/main.html',
        controller  : 'MainCtrl'
    })

    // route for the about page
    .when('/cadastro', {
        templateUrl : 'assets/html/cadastro.html',
        controller  : 'MainCtrl'
    })

    // 404 not found
    //.otherwise({  });
});

mainApp.controller("MainCtrl", function($scope){



})
