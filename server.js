var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var _ = require('underscore');
var port = process.env.PORT || 3000;
var todos= [];
var todoNextId = 1;
app.use(bodyParser.json());

app.get('/',function(req,res){
	res.send('TODO API ROOT');
});

//get request /todos
app.get('/todos',function(req,res){
res.json(todos);
});


//GET /todos/:id
app.get('/todos/:id',function(req,res){
	var todoId = parseInt(req.params.id,10);

	var matchedTodo = _.findWhere(todos,{id:todoId});
	// var matchedTodo;

	// todos.forEach(function(todo){
	// 	if(todoId === todo.id){
	// 		matchedTodo = todo;
	// 	}
	// });

if(matchedTodo){
	res.json(matchedTodo);
}else{
	res.status(404).send();
}



});


// POST /todos
app.post('/todos',function(req,res){
	var body = _.pick(req.body,'description','completed');

	if(!_.isBoolean(body.completed) || !_.isString(body.description) || body.description.trim().length === 0) {
		return res.status(400).send();
	}

	body.description = body.description.trim();
	//add id field
	body.id = todoNextId++;
	//pusy body into array
	todos.push(body);


	res.json(body);
});


app.listen(port,function(){
	console.log('server is now running');
});


