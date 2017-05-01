import Ember from 'ember';

export default Ember.Route.extend({

	controllerName: 'test-list',
	
	model(params) {
		return Ember.RSVP.hash({
			test: this.store.query('test', {feature_id: params.feature_id}),
			testState: this.store.findAll('test_state'),
			feature: this.store.findRecord('feature', params.feature_id)
		});
	},
	setupController(controller, model) {
		this._super(...arguments);
		Ember.set(controller, 'test', model.test);
		Ember.set(controller, 'test_state', model.testState);
		Ember.set(controller, 'feature', model.feature);
	}
});
