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
    .when('/cadastro2', {
        templateUrl : 'assets/html/cadastro2.html',
        controller  : 'MainCtrl'
    })


    // route for the about page
    .when('/login', {
        templateUrl : 'assets/html/login-fake.html',
        controller  : 'MainCtrl'
    })

    .when('/dev', {
        templateUrl : 'assets/html/dev.html',
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

mainApp.controller("MainCtrl", function($scope, $rootScope){

    $scope.nome = ''; //
    $scope.email = ''; //
    $scope.senha = ''; //
    $scope.cpf = '';
    $scope.rg = '';
    $scope.instituicao = '';
    $scope.curso = '';
    $scope.disponibilidade = '';
    $scope.graduacao = '';
    $scope.estagio = '';
    $scope.linkedin = '';
    $scope.celular = ''; //
    $scope.telefone = '';
    $scope.endereco = '';
    $scope.observacoes = '';
    $scope.conpec = '';

    $scope.nome_dev = ''; //
    $scope.email_dev = ''; //
    $scope.senha_dev = ''; //
    $scope.cpf_dev = '';
    $scope.rg_dev = '';
    $scope.instituicao_dev = '';
    $scope.curso_dev = '';
    $scope.disponibilidade_dev = '';
    $scope.graduacao_dev = '';
    $scope.estagio_dev = '';
    $scope.linkedin_dev = '';
    $scope.celular_dev = ''; //
    $scope.telefone_dev = '';
    $scope.endereco_dev = '';
    $scope.observacoes_dev = '';
    $scope.conpec_dev = '';

    $scope.dataPost = {};

    $scope.PostNewUser = function(){
      $scope.PostNewUser.NAME = $scope.nome;
      $scope.PostNewUser.EMAIL = $scope.email;
      $scope.PostNewUser.PASSWORD = $scope.senha;
      $scope.PostNewUser.PHONE = $scope.celular;
    }

    $scope.PassaCadastro = function(username, email, password) {
        $rootScope.username = username;
        $rootScope.emailM = email;
        $rootScope.password = password;
    }

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

    $scope.limpaCadatro = function()
    {
        $scope.nome = '';
        $scope.email = '';
        $scope.senha = '';
        $scope.cpf = '';
        $scope.rg = '';
        $scope.instituicao = '';
        $scope.curso = '';
        $scope.disponibilidade = '';
        $scope.graduacao = '';
        $scope.estagio = '';
        $scope.linkedin = '';
        $scope.celular = '';
        $scope.telefone = '';
        $scope.endereco = '';
        $scope.observacoes = '';
        $scope.conpec = '';
        $scope.sliderJava.value = 0;
        $scope.sliderPHP.value = 0;
        $scope.sliderMySQL.value = 0;
        $scope.sliderAjax.value = 0;
        $scope.sliderJavaScript.value = 0;
        $scope.sliderPython.value = 0;
        $scope.sliderCsharp.value = 0;
        $scope.sliderRuby.value = 0;
        $scope.sliderCpp.value = 0;
        $scope.sliderAndroid.value = 0;
        $scope.sliderIOS.value = 0;
        $scope.sliderJQuery.value = 0;
        $scope.sliderCSS.value = 0;
        $scope.sliderDotNet.value = 0;
        $scope.sliderAsp.value = 0;
        $scope.sliderCMS.value = 0;
    }

    $scope.cadastro_para2 = function()
    {
        //aqui temos todos os dados da primeira parte do cadastro
        // $scope.nome
        // $scope.email
        // $scope.senha
        // $scope.cpf
        // $scope.rg
        // $scope.instituicao
        // $scope.curso
        // $scope.disponibilidade
        // $scope.graduacao
        // $scope.estagio
        // $scope.linkedin
        // $scope.celular
        // $scope.telefone
        // $scope.endereco
        // $scope.observacoes
        // $scope.conpec
        window.location.replace("http://localhost:1414/#cadastro2");
    }

    $scope.cadastro_feito = function()
    {
        // $scope.sliderJava.value
        // $scope.sliderPHP.value
        // $scope.sliderMySQL.value
        // $scope.sliderAjax.value
        // $scope.sliderJavaScript.value
        // $scope.sliderPython.value
        // $scope.sliderCsharp.value
        // $scope.sliderRuby.value
        // $scope.sliderCpp.value
        // $scope.sliderAndroid.value
        // $scope.sliderIOS.value
        // $scope.sliderJQuery.value
        // $scope.sliderCSS.value
        // $scope.sliderDotNet.value
        // $scope.sliderAsp.value
        // $scope.sliderCMS.value
        console.log("olha o java aqui" + $scope.sliderJava.value);
        window.location.replace("http://localhost:1414/#sucesso");
    }

    $scope.cadastro_para1 = function()
    {
        $scope.cadastro = 1;
    }
})
