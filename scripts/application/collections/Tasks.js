define(['marionette', 'application/models/Task'], function(Marionette, Task){
	'use strict';

	return Backbone.Collection.extend({
		model: Task
	});
});