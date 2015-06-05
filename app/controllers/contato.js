// ./app/controllers/contato.js
var contatos = [
	{_id: 1, nome: "Contato 01", email: "email01@gmail.com"},
	{_id: 2, nome: "Contato 02", email: "email02@gmail.com"},
	{_id: 3, nome: "Contato 03", email: "email03@gmail.com"},
	{_id: 4, nome: "Contato 04", email: "email04@gmail.com"},
	{_id: 5, nome: "Contato 05", email: "email05@gmail.com"},
	{_id: 6, nome: "Contato 06", email: "email06@gmail.com"},
];

module.exports = function() {
	
	var controller = {};

	controller.listaContatos = function(req, res) {
		res.json(contatos);
	};

	controller.obtemContato = function(req, res) {
		var idContato = req.params.id;
		var contato = contatos.filter(function(contato) {
			return contato._id == idContato;
		})[0];
		contato ? res.json(contato) : res.status(404).send('Contato nao encontrado');

	};

	controller.removeContato = function(req, res) {
		var idContato = req.params.id;
		contatos = contatos.filter(function(contato) {
			return contato._id != idContato;
		});
		res.status(204).end();
	};

	return controller;
}