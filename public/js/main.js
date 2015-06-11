var app = angular.module('contatooh', ['ngRoute', 'ngResource']);

app.config(function($routeProvider, $httpProvider) {

	$httpProvider.interceptors.push('interceptador');
	
	$routeProvider.when('/auth', {
		templateUrl: 'partials/auth.html'
	});

	$routeProvider.when('/contatos', {
		templateUrl: 'partials/contatos.html',
		controller: 'ContatosController'
	});

	$routeProvider.when('/contato/:contatoId', {
		templateUrl: 'partials/contato.html',
		controller: 'ContatoController'
	});

	$routeProvider.when('/contato', {
		templateUrl: 'partials/contato.html',
		controller: 'ContatoController'
	});

	$routeProvider.otherwise({redirectTo: '/contatos'})
	
});