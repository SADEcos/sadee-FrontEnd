mainApp.controller("SearchController", function($scope){
  $scope.mockUsers = [{
  		"Nome": "Erik Perillo",
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



})
