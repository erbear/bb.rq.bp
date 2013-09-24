define(function(require){
	'use strict';
	return {
		header: require('tpl!application/templates/header.tmpl'),
		todoItemView: require('tpl!application/templates/todoItemView.tmpl'),
		todoItemEditView: require('tpl!application/templates/todoItemEditView.tmpl'),
		todoListView: require('tpl!application/templates/todoListView.tmpl')
	};
});