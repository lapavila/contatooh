var app = angular.module('contatooh');

app.controller('ContatoController', function($scope, $routeParams, $resource) {
		
	var Contato = $resource('/contatos/:id');

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
		$scope.contato.$save()
			.then(function() {
				$scope.mensagem = {
					texto: 'Salvo com sucesso'
				};
				$scope.contato = new Contato();
			})
			.catch(function(erro) {
				$scope.mensagem = {
					texto: 'Não fpoi possível Salvar'
				};
			});
	};

});