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

    // route for the about page
    .when('/login', {
        templateUrl : 'assets/html/login-fake.html',
        controller  : 'MainCtrl'
    })

    // 404 not found
    //.otherwise({  });
});

mainApp.controller("MainCtrl", function($scope){

    $scope.cadastro = 1;

    $scope.cadastro_para2 = function()
    {
        $scope.cadastro = 2;

        // With JQuery
        $("#java").slider();
        $("#java").on("slide", function(slideEvt) {
            $("#javaSliderVal").text(slideEvt.value);
        });

        $("#php").slider();
        $("#php").on("slide", function(slideEvt) {
            $("#phpSliderVal").text(slideEvt.value);
        });
    }

    $scope.cadastro_para1 = function()
    {
        $scope.cadastro = 1;
    }



})
