import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
	location: config.locationType,
	rootURL: config.rootURL
});

Router.map(function() {
	this.route('tests', {path: '/feature/:feature_id'});
	this.route('features', {path: '/'});
	this.route('test_states');
});

export default Router;
