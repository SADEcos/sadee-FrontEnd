mainApp.controller("SearchController", function($scope, NgTableParams, $rootScope, $http){

    $scope.show = {
		"Nome": true,
		"Email": true,
		"Disponivel": true,
        "Java": false,
        "PHP": false,
        "MySQL": false,
        "Ajax": false,
        "Javascript": false,
        "Python": false,
        "Csharp": false,
        "Ruby": false,
        "Cpp": false,
        "Android": false,
        "iOS": false,
        "JQuery": false,
        "CSS": false,
        "dotnet": false,
        "Asp": false,
        "CMS": false,
    };

	$scope.columns = [
                { title: 'Nome', field: 'Nome', visible: true, filter: { 'Nome': 'text' } },
                { title: 'Email', field: 'Email', visible: true, filter: { 'Email': 'text' } },
                { title: 'Disponivel', field: 'Disponivel', visible: true, filter: { 'Disponivel': 'text' } },
                { title: 'Java', field: 'Java', visible: true, filter: { 'Java': 'text' } },
                { title: 'PHP', field: 'PHP', visible: true, filter: { 'PHP': 'text' } },
                { title: 'MySQL', field: 'MySQL', visible: true, filter: { 'MySQL': 'text' } },
                { title: 'Ajax', field: 'Ajax', visible: true, filter: { 'Ajax': 'text' } },
                { title: 'Javascript', field: 'Javascript', visible: true, filter: { 'Javascript': 'text' } },
                { title: 'Python', field: 'Python', visible: true, filter: { 'Python': 'text' } },
                { title: 'Csharp', field: 'Csharp', visible: true, filter: { 'Csharp': 'text' } },
                { title: 'Ruby', field: 'Ruby', visible: true, filter: { 'Ruby': 'text' } },
                { title: 'C++', field: 'Cpp', visible: true, filter: { 'Cpp': 'text' } },
                { title: 'Android', field: 'Android', visible: true, filter: { 'Android': 'text' } },
                { title: 'iOS', field: 'iOS', visible: true, filter: { 'iOS': 'text' } },
                { title: 'JQuery', field: 'JQuery', visible: true, filter: { 'JQuery': 'text' } },
                { title: 'CSS', field: 'CSS', visible: true, filter: { 'CSS': 'text' } },
                { title: 'dotnet', field: 'dotnet', visible: true, filter: { 'dotnet': 'text' } },
                { title: 'Asp', field: 'Asp', visible: true, filter: { 'Asp': 'text' } },
                { title: 'CMS', field: 'CMS', visible: true, filter: { 'CMS': 'text' } },
            ];

    $scope.mockUsers = [
	{
		"Nome": "Erik Perillo",
		"Email": "perik@perillo.com",
		"Disponivel": false,
		"Instituicao": "Unicamp",
		"Id": 2,
		"Curso": "Medicina",
		"curso": "Medicina",
		"Disponibilidade": 40,
		"Java": 2,
		"PHP": 3,
		"MySQL": 5,
		"Ajax": 2,
		"Javascript": 4,
		"Python": 0,
        "Csharp": 3,
        "Ruby": 4,
        "Cpp": 7,
        "Android": 5,
        "iOS": 6,
        "JQuery": 6,
        "CSS": 5,
        "dotnet": 1,
        "Asp": 1,
        "CMS": 3

	}, {
		"Nome": "Perik Erillo",
		"Email": "erik@erillo.com",
		"Disponivel": true,
		"Instituicao": "Punicam",
		"Id": 5,
		"Curso": "MadeInChina",
		"Disponibilidade": 23,
		"Java": 9,
		"PHP": 0,
		"MySQL": 6,
        "Ajax": 1,
        "Javascript": 3,
        "Python": 2,
        "Csharp": 4,
        "Ruby": 2,
        "Cpp": 10,
        "Android": 0,
        "iOS": 1,
        "JQuery": 2,
        "CSS": 2,
        "dotnet": 3,
        "Asp": 2,
        "CMS": 2
	}, {
		"Nome": "Eduardo Cunha",
		"Email": "cunhao157@hotmail.com",
		"Disponivel": true,
		"Instituicao": "Senado",
		"Id": 6,
		"Curso": "Malandragem",
		"Disponibilidade": 23,
		"Java": 10,
		"PHP": 10,
		"MySQL": 2,
        "Ajax": 3,
        "Javascript": 10,
        "Python": 1,
        "Csharp": 3,
        "Ruby": 3,
        "Cpp": 3,
        "Android": 6,
        "iOS": 0,
        "JQuery": 8,
        "CSS": 0,
        "dotnet": 0,
        "Asp": 2,
        "CMS": 1
	}, {
		"Nome": "Felix Arvid Ulf Kjellberg",
		"Email": "pewds@hotmail.com",
		"Disponivel": true,
		"Instituicao": "Youtube",
		"Id": 7,
		"Curso": "Games",
		"Disponibilidade": 20,
		"Java": 2,
		"PHP": 1,
		"MySQL": 10,
        "Ajax": 4,
        "Javascript": 5,
        "Python": 7,
        "Csharp": 3,
        "Ruby": 8,
        "Cpp": 8,
        "Android": 5,
        "iOS": 3,
        "JQuery": 5,
        "CSS": 1,
        "dotnet": 1,
        "Asp": 1,
        "CMS": 3
	}, {
		"Nome": "Doutor Pirula",
		"Email": "piruloso@yahoo.com",
		"Disponivel": true,
		"Instituicao": "Youtube",
		"Id": 8,
		"Curso": "Biologia",
		"Disponibilidade": 2,
		"Java": 3,
		"PHP": 3,
		"MySQL": 1,
        "Ajax": 4,
        "Javascript": 9,
        "Python": 8,
        "Csharp": 4,
        "Ruby": 7,
        "Cpp": 6,
        "Android": 6,
        "iOS": 8,
        "JQuery": 8,
        "CSS": 3,
        "dotnet": 3,
        "Asp": 4,
        "CMS": 8
	}, {
		"Nome": "Breno Chimbuloso",
		"Email": "chimbulei@yahoo.com",
		"Disponivel": true,
		"Instituicao": "USP",
		"Id": 9,
		"Curso": "Biologia",
		"Disponibilidade": 2,
        "iOs": 0,
        "dotnet": 5,
        "Android": 5,
        "Asp": 1,
        "JQuery": 10,
        "CSS": 4,
        "Ruby": 9,
        "Javascript": 9,
        "MySql": 0,
        "Cpp": 7,
        "PHP": 10,
        "Ajax": 5,
        "Python": 6,
        "Java": 4,
        "Csharp": 2,
        "CMS": 5
	}, {
		"Nome": "Samuel L. Jackson",
		"Email": "samuca@gmail.com",
		"Disponivel": true,
		"Instituicao": "Harvard",
		"Id": 10,
		"Curso": "Teatro",
		"Disponibilidade": 18,
        "Javascript": 1,
        "Csharp": 8,
        "iOs": 7,
        "Java": 3,
        "Python": 8,
        "Asp": 4,
        "Cpp": 0,
        "CMS": 6,
        "Android": 3,
        "JQuery": 0,
        "Ajax": 9,
        "PHP": 10,
        "MySql": 1,
        "dotnet": 9,
        "Ruby": 0,
        "CSS": 9,
	}
    ];

    /*$http.get($rootScope.urlCadastro + '/search', $scope.dataPost).
        success(function(data, status, headers, config) {
        console.log("oi" + $scope.urlCadastro + "/search");
        // this callback will be called asynchronously
        // when the response is available

      }).
      error(function(data, status, headers, config) {
        console.log("eita" + $scope.urlCadastro + "/search");
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });*/

    //$.getJSON('http://query.yahooapis.com/v1/public/yql?q=select%20%2a%20from%20yahoo.finance.quotes%20WHERE%20symbol%3D%27WRC%27&format=json&diagnostics=true&env=store://datatables.org/alltableswithkeys&callback', function(data) {
	var self = this;
	self.tableParams = new NgTableParams({}, { dataset: $scope.mockUsers});

    $scope.UserDetails = function(user){
    //   $http.get($rootScope.urlGetUser, $scope.PostNewUser).
    //   success(function(data, status, headers, config) {
   //     // this callback will be called asynchronously
       // when the response is available
       console.log(JSON.stringify(user));


        $rootScope.email = user.Email;
        $rootScope.instituicao = user.Instituicao;
        $rootScope.nome = user.Nome;
        $rootScope.curso = user.Curso;
        $rootScope.disponibilidade = user.Disponibilidade;

   //   }).
   //   error(function(data, status, headers, config) {
   //     // called asynchronously if an error occurs
   //     // or server returns response with an error status.
   //   });
    }

});
