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
		Ember.set(controller, 'tests', model.test.toArray());
		Ember.set(controller, 'test_states', model.testState.toArray());
		Ember.set(controller, 'feature', model.feature);
	}
});
