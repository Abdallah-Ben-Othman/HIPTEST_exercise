import { moduleForModel, test } from 'ember-qunit';

moduleForModel('test-state', 'Unit | Model | test state', {
  // Specify the other units that are required for this test.
  needs: ['model:test']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
