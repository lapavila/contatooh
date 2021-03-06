var app = angular.module('contatooh');

app.controller('ContatoController', function($scope, $routeParams, Contato) {
		
	if ($routeParams.contatoId) {
		Contato.get({id: $routeParams.contatoId},
			function(contato) {
				$scope.contato = contato;
			},
			function(erro) {
				$scope.mensagem = {
					texto: "Contato não existe. Novo contato."
				};
			}
		);
	} else {
		$scope.contato = new Contato();
	}

	$scope.salvar = function() {
		$scope.contato.$save(
			function() {
				$scope.mensagem = {
					texto: 'Salvo com sucesso'
				};
				$scope.contato = new Contato();
			},
			function(erro) {
				$scope.mensagem = {
					texto: 'Não foi possível Salvar'
				};
			});
	};

});