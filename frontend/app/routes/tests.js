import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		return Ember.RSVP.hash({
			test: this.store.query('test', {feature_id: params.feature_id}),
			testState: this.store.findAll('feature')
		});
	},
	setupController(controller, model) {
		this._super(...arguments);
		Ember.set(controller, 'test', model.test);
		Ember.set(controller, 'test_state', model.testState);
	}
});
