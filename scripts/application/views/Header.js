define(['marionette', 'templates'], function(Marionette, templates){
	'use strict';

	return Marionette.ItemView.extend({
		template: templates.header,

		ui: {
			input: 'input'
		},

		events: {
			'keypress input': 'onEnter'
		},

		onEnter: function(e){
			var ENTER_KEY = 13;

			if(e.which === ENTER_KEY)
			{
				this.collection.add({
					name: this.ui.input.val()
				});
				this.ui.input.val('');
			}
		}

	});
});