import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('test-state-drop-down-list', 'Integration | Component | test state drop down list', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{test-state-drop-down-list}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#test-state-drop-down-list}}
      template block text
    {{/test-state-drop-down-list}}
  `);

  assert.equal(this.$().text().trim(), '');
});
