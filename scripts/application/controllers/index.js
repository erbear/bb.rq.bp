define(['app'], function(app){
	return {
		editTask: function(name){
			window.app.vent.trigger('edit:mode', name);
		},
		addMode: function(){
			window.app.vent.trigger('add:mode', name);
		}
	}
});