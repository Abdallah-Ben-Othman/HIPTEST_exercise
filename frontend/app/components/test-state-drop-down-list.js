import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		changeTestState: function(newTestStateId) {

			this.sendAction('dropDownListAction', this.get('testId'), newTestStateId);
			//this.get('controllerActionWhenOtherTestStateIsSelected')(this.get('testId'), newTestStateSelection);
		}
	}
});
