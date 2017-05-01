import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		createTest(featureId) {
			var belongsToFeature = this.get('store').peekRecord('feature', featureId);
			var testToCreate = this.get('store').createRecord('test', {feature: belongsToFeature}); //Name is created by server			
			testToCreate.save();
			var reloadPath = '';
			var reloadPath = relaodPath.concat('/feature/', featureId.toString());
			this.transitionToRoute(reloadPath);
					
		}
	}
});
