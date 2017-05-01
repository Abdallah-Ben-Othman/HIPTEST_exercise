import Ember from 'ember';

export default Ember.Component.extend({
	creationButtonText: 'This is an abstract button',
	defaultLayout: Ember.computed(function() {
    
		return this.container.lookup('template:components/test-manager-list')
	}),
	actions: {
		testManagerCreation: function() {

			this.get('controllerActionWhenCreationButtonIsPressed')();
		}
	}
});
