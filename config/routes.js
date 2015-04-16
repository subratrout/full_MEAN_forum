var users = require('./../server/controllers/users.js');
var topics = require('./../server/controllers/topics.js');
var comments = require('./../server/controllers/comments.js');
var answers = require('./../server/controllers/answers.js');
var bodyParser = require("body-parser");



module.exports = function(app){

	app.use(bodyParser.json());

	app.get('/customers', function(req, res){
		customers.show(req,res);

	});

	app.post('/add_customer', function(req, res){
		
		customers.add(req,res);
	});

	app.post('/remove_customer', function(req, res){
		
		customers.remove(req,res);
	});

	app.get('/orders', function(req, res){
		orders.show(req,res);

	});

	app.post('/add_order', function(req, res){
		
		orders.add(req,res);
	});

	app.post('/remove_order', function(req, res){
		
		orders.remove(req,res);
	});

	app.get('/products', function(req, res){
		products.show(req,res);

	});

	app.post('/add_product', function(req, res){

		products.add(req,res);
	});

	app.post('/remove_product', function(req, res){

		products.remove(req,res);
	});
}