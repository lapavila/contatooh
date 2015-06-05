var app = angular.module('contatooh');

app.controller('ContatoController', function($scope, $routeParams, $resource) {
		
	var Contato = $resource('/contatos/:id')
	Contato.get({id: $routeParams.contatoId},
		function(contato) {
			$scope.contato = contato;
		},
		function(erro) {
			$scope.mensagem = {
				texto: "erro ao buscar o contato"
			};
		}
	);

});