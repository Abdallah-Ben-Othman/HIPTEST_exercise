import Ember from 'ember';

export default Ember.Route.extend({
	controllerName: 'feature-list',	
	model() {
		return this.store.findAll('feature');
	},
});
