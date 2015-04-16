var users = require('./../server/controllers/users.js');
var topics = require('./../server/controllers/topics.js');
var comments = require('./../server/controllers/comments.js');
var answers = require('./../server/controllers/answers.js');


module.exports = function(app){

	

	app.get('/users', function(req, res){
		customers.show(req,res);

	});

	app.post('/add_user', function(req, res){
		
		users.add(req,res);
	});

	app.post('/remove_user', function(req, res){
		
		users.remove(req,res);
	});

	app.get('/topics', function(req, res){
		topics.show(req,res);

	});

	app.post('/add_topic', function(req, res){
		
		topics.add(req,res);
	});

	app.post('/remove_topic', function(req, res){
		
		topics.remove(req,res);
	});

	app.get('/answers', function(req, res){
		answers.show(req,res);

	});

	app.post('/add_answer', function(req, res){

		answers.add(req,res);
	});

	app.post('/remove_answer', function(req, res){

		answers.remove(req,res);
	});

	app.get('/comments', function(req, res){
		comments.show(req,res);

	});

	app.post('/add_comment', function(req, res){

		comments.add(req,res);
	});

	app.post('/remove_product', function(req, res){

		comments.remove(req,res);
	});

}