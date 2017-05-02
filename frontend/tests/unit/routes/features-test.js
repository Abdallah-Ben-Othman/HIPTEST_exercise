import { moduleFor, test } from 'ember-qunit';

moduleFor('route:features', 'Unit | Route | features', {
  // Specify the other units that are required for this test.
   needs: ['controller:feature-list']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
