require.config({
	baseUrl: "scripts",
	urlArgs: "bust=" + (new Date()).getTime(),
	paths : {
	    jquery : '../bower_components/jquery/jquery',
	    underscore : '../bower_components/underscore-amd/underscore',
	    backbone : '../bower_components/backbone-amd/backbone',
	    marionette : '../bower_components/marionette/backbone.marionette',
	    tpl: '../bower_components/requirejs-tpl/tpl',
		application : 'application'
	},
	shim: {
		underscore: {
			exports: '_'
		},

		backbone: {
			exports: 'Backbone',
			deps: ['jquery', 'underscore']
		},

		marionette: {
			exports: 'Backbone.Marionette',
			deps: ['backbone']
		}
	},

	deps: ['jquery', 'underscore']
});

require([
	'app',
	'application/routes/index',
	'application/controllers/index'], function(app, Router, Controller){
	app.start();
	new Router({controller: Controller});
	Backbone.history.start();
});