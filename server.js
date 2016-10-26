var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var todos= [{
	id: 1,
	description: 'Meet mom for lunch',
	compeleted: false

}, {
	id: 2,
	description: 'Go to market',
	compeleted: false
}, {
	id: 3,
	description: 'check email',
	compeleted: true
}];

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
	var matchedTodo;

	todos.forEach(function(todo){
		if(todoId === todo.id){
			matchedTodo = todo;
		}
	});

if(matchedTodo){
	res.json(matchedTodo);
}else{
	res.status(404).send();
}



});

app.listen(port,function(){
	console.log('server is now running');
});


