var mainApp = angular.module("SadeApp", ['ngRoute', 'rzModule', 'ngTable']);

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

    .when('/error', {
        templateUrl : 'assets/html/error.html',
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

    .when('/dev', {
        templateUrl : 'assets/html/login-fake.html',
        controller  : 'MainCtrl'
    })

    .when('/busca', {
        templateUrl : 'assets/html/busca.html',
        controller  : 'MainCtrl'
    })

    // route for the about page
    .when('/sucesso', {
        templateUrl : 'assets/html/sucesso.html',
        controller  : 'MainCtrl'
    })


    // 404 not found
    //.otherwise({  });
});

mainApp.controller("MainCtrl", function($scope){

    $scope.ChangePage = function(name){
        if(name.includes("admin")){
            window.location.replace("http://localhost:1414/#busca");
        }
        else if(name.includes("dev")){
            window.location.replace("http://localhost:1414/#dev");
        }
        else{
            window.location.replace("http://localhost:1414/#error");
        }

}

options = {
    value: 0,
    options: {
        floor: 0,
        ceil: 10,
        showSelectionBar: true,
        getSelectionBarColor: function(value)
        {
            var cor = (150 - value*9).toString(16);
            return "#"+cor+cor+cor;
        }

    }
};

    $scope.sliderJava = $.extend(true, {}, options);
    $scope.sliderPHP = $.extend(true, {}, options);
    $scope.sliderMySQL = $.extend(true, {}, options);
    $scope.sliderAjax = $.extend(true, {}, options);
    $scope.sliderJavaScript = $.extend(true, {}, options);
    $scope.sliderPython = $.extend(true, {}, options);
    $scope.sliderCsharp = $.extend(true, {}, options);
    $scope.sliderRuby = $.extend(true, {}, options);
    $scope.sliderCpp = $.extend(true, {}, options);
    $scope.sliderAndroid = $.extend(true, {}, options);
    $scope.sliderIOS = $.extend(true, {}, options);
    $scope.sliderJQuery = $.extend(true, {}, options);
    $scope.sliderCSS = $.extend(true, {}, options);
    $scope.sliderDotNet = $.extend(true, {}, options);
    $scope.sliderAsp = $.extend(true, {}, options);
    $scope.sliderCMS = $.extend(true, {}, options);

    $scope.cadastro = 1;

    $scope.cadastro_para2 = function()
    {
        $scope.cadastro = 2;
    }

    $scope.cadastro_para1 = function()
    {
        $scope.cadastro = 1;
    }
    $scope.MeuSucesso = function() {
            window.location.replace("http://localhost:1414/#sucesso");
    }


})
