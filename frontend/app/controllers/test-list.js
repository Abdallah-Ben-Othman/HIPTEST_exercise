import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		createTest(featureId) {

			var belongsToFeature = this.get('store').peekRecord('feature', featureId);
			var testToCreate = this.get('store').createRecord('test', {feature: belongsToFeature}); //Name is created by server			
			testToCreate.save();
			this.get('tests').pushObject(testToCreate);
		},

		controllerUpdateTestState(testId, newTestStateId) {

			alert("We update test number : " + testId);
			alert("New test state : " + newTestStateId);
			var testToUpdate = this.get('store').peekRecord('test', testId);
			var newTestState = this.get('store').peekRecord('test_state', newTestStateId);
			alert("test to update : " + testToUpdate);
			testToUpdate.set('testState', newTestState);
			testToUpdate.save();
		}
	}
});
