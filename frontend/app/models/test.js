import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  testState: DS.belongsTo('test-state'),
  feature: DS.belongsTo('feature')
});
