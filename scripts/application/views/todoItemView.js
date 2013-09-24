define(['marionette', 'templates'], function (Marionette, templates){
	'use strict';
	return Marionette.ItemView.extend({
		tagName: 'li',
		template: templates.todoItemView,

		events: {
			'click button': 'removeItem',
			'click a': 'editMode'
		},
		removeItem: function(e){
			e.preventDefault();
			this.model.destroy();
		},
		editMode: function(){
			window.app.vent.trigger('editMode', this.model);
		}
	});
});