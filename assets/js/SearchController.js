mainApp.controller("SearchController", ['$scope', 'NgTableParams', function($scope, NgTableParams){
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
		"Curso": "Medicina",
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
	}
    ];

	var self = this;
	self.tableParams = new NgTableParams({}, { dataset: $scope.mockUsers});

    $scope.teste = function(){
		console.log(JSON.stringify($scope.user));
    }
}]);
