import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		//return this.store.query('test', {filter: {feature: params.feature_id}});
		return this.store.findAll('test');
	},
});
