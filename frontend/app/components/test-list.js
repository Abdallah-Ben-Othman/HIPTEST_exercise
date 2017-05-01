//import Ember from 'ember';
import TestManagerList from './test-manager-list';

export default TestManagerList.extend({
	creationButtonText: 'Create new test',
	elementComponent: 'test-element-template',
	actions: {
		updateTestState(testId, newTestStateId) {
			
			this.set('dropDownListAction', 'controllerUpdateTestState');
			this.sendAction('dropDownListAction', testId, newTestStateId);
		}
	}
});
