mainApp.controller("SearchController", ['$scope', 'NgTableParams', function($scope, NgTableParams){
    $scope.user = {
		"nome": "",
		"avaliable": false,
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

    var mockUsers = [
	{
		Nome: "Erik Perillo",
		"Email": "erik@perillo.com",
		"Instituicao": "Unicamp",
		"Curso": "Medicina",
		"Disponibilidade": 40,
		"Linguagens": [{
			"nome": "Java",
			"valor": 10
		}, {
			"nome": "PHP",
			"valor": 8
		}, {
			"nome": "MySQL",
			"valor": 5
		}, {
			"nome": "Javascript",
			"valor": 10
		}]
	}, {
		"Nome": "Perik Erillo",
		"Email": "perik@erillo.com",
		"Instituicao": "Punicam",
		"Curso": "MadeInChina",
		"Disponibilidade": 23,
		"Linguagens": [{
			"nome": "Java",
			"valor": 4
		}, {
			"nome": "PHP",
			"valor": 8
		}, {
			"nome": "MySQL",
			"valor": 0
		}, {
			"nome": "Javascript",
			"valor": 0
		}]
	}
    ];

	var self = this;
	self.tableParams = new NgTableParams({}, { dataset: mockUsers});

    $scope.teste = function(){
		console.log(JSON.stringify($scope.user));
    }
}]);
