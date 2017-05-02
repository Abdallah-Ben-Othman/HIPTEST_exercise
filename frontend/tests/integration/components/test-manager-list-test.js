import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('test-manager-list', 'Integration | Component | test manager list', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{test-manager-list}}`);

  assert.equal(this.$().text().trim(), 'This is an abstract button');

  // Template block usage:
  this.render(hbs`
    {{#test-manager-list}}
      template block text
    {{/test-manager-list}}
  `);

  assert.equal(this.$().text().trim(), 'This is an abstract button');
});
