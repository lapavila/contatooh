var app = angular.module('contatooh');
app.factory('Contato', function($resource) {
	return $resource('/contatos/:id');
});