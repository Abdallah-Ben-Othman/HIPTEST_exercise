import Ember from 'ember';

export default Ember.Component.extend({
	creationButtonText: 'This is an abstract button',
	defaultLayout: Ember.computed(function() {
    
		return this.container.lookup('template:components/test-manager-list')
	}),
	actions: {
		testManagerDelete: function() {
			
			alert('This is an abstract function');
		},
		testManagerCreation: function() {

			alert('This is an abstract function');
		}
	}
});
