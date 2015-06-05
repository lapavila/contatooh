var app = angular.module('contatooh')

app.controller('ContatosController', function($scope, $resource) {

	$scope.total = 0;

	$scope.contatos = [];

	$scope.filtro = '';

	$scope.mensagem = {texto: ''};

	var Contato = $resource('/contatos/:id');

	var buscaContatos = function() {
		Contato.query(
			function(contatos) {
				$scope.contatos = contatos;
				$scope.mnsagem = {};
			},
			function(erro) {
				$scope.mensagem = {
					texto: "Não foi possivel obter a Lista de contatos"
				};
				console.log(erro);
			}
		);
	};

	buscaContatos();

	$scope.remove = function(contato) {
		Contato.delete({id: contato._id},
			buscaContatos,
			function(erro) {
				$scope.mensagem = {
					texto: "Não foi possivel obter a Lista de contatos"
				};
				console.log(erro);
			}
		);
	};

});