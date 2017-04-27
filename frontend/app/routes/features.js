import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.findAll('feature', {reload: true});
		//return [{'name': 'feature1'}, {'name': 'feature2'} ];
	},
});
