define(['marionette', 'templates'], function (Marionette, templates){
	'use strict';
	return Marionette.ItemView.extend({
		template: templates.todoItemEditView,
		ui: {
			input: 'input',
		},
		events: {
			'click a': 'saveChanges'
		},
		saveChanges: function(e){
			this.model.set('name', this.ui.input.val());
		}
	});
});