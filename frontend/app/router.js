import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('tests', {path: 'tests/:feature_name'});
  this.route('features', {path: '/'});
});

export default Router;
