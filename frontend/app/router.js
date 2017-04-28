import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
	location: config.locationType,
	rootURL: config.rootURL
});

Router.map(function() {
	this.route('tests', {path: '/feature/:feature_id'});
	this.route('features', {path: '/'});
});

export default Router;
