define(['marionette', 'templates', 'application/views/todoItemView'], function(Marionette, templates, itemView){
	'use strict';
	return Marionette.CompositeView.extend({
		template: templates.todoListView,
		itemView: itemView,
		itemViewContainer: '#task-list',
	});
});