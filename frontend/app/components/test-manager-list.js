import Ember from 'ember';

export default Ember.Component.extend({
	isTest: false,
	defaultLayout: Ember.computed(function() {
    
		return this.container.lookup('template:components/test-manager-list')
	}),
	actions: {
		testManagerLink: function() {

			alert('This is an abstract function');
		},
		testManagerDelete: function() {
			
			alert('This is an abstract function');
		}
	}
});
