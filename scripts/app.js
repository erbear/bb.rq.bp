define([
	'marionette', 
	'application/views/Header', 
	'application/collections/Tasks',
	'application/views/todoListView',
	'application/views/todoItemEditView'
	], function(Marionette, Header, Tasks, TodoListView, TodoItemEditView, Router, Controller){
	'use strict';
	var app = new Marionette.Application();

	var taskList = new Tasks();
	taskList.add({name: 'dodaj cos'});

	var ViewOptions = {
		collection: taskList
	};

	var header = new Header(ViewOptions);

	app.addRegions({
		header: '#header',
		main: '#main'
	});

	app.addInitializer(function(){
		var todoListView = new TodoListView(ViewOptions);
		app.header.show(header);
		app.main.show(todoListView);

	});
	app.vent.on('edit:mode', function(name){
		var task = taskList.findWhere({name: name});
		var todoItemEditView = new TodoItemEditView({model: task});
		app.main.show(todoItemEditView);
	});
	app.vent.on('add:mode', function(){
		var todoListView = new TodoListView(ViewOptions);
		app.main.show(todoListView);
		console.log(taskList.toJSON());
	});
	app.on('initialize:after', function(){
	})
	return window.app = app;
});