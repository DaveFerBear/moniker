import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType,
    rootURL: config.rootURL
});

Router.map(function() {
    this.route('main', { path: '/' });
    this.route('page-not-found', { path: '/*wildcard' });
    this.route('profile', { path: '/:id' });
});

export default Router;
