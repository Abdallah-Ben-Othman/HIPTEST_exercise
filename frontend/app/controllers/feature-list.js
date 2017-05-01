import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		createFeature: function() {
			var featureToCreate = this.store.createRecord('feature', {}); //Name is created by server			
			featureToCreate.save();
		}
	}
});
