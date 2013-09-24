define(['marionette'], function(Marionette){
	'use strict';

	return Backbone.Model.extend({
		defaults:{
			name: 'pusto',
			created: 0
		},
		initialize: function(){
			if (this.isNew()){
				this.set('created', Date.now());
			}
		}
	});
});