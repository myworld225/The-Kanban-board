//binding task model
var Task = require('../models/task');

//define list() to get all tasks and display
exports.list = function(req, res){

	//find tasks
	Task.find(function(err, tasks){

		console.log('Succeed to get all tasks {'+tasks+'}');

		var todoTasks = [];
		var inProgressTasks = [];
		var doneTasks = [];

		//make task list for each status
		for( var key in tasks){
			var task = tasks[key];
			if(task.get('status') === 'TO-DO'){
				todoTasks.push(task.get('contents'));
			}else if(task.get('status') === 'In-Progress'){
				inProgressTasks.push(task.get('contents'));
			}else if(task.get('status') === 'Done'){
				doneTasks.push(task.get('contents'));
			}else{
				console.error('Task status is not valid.'+task);
			}
		}
		//rendering to main page with each task list
		res.render('index',{
			title: 'My Kanban Board',
			todoTasks : todoTasks,
			inProgressTasks : inProgressTasks,
			doneTasks : doneTasks
		});
	});
};