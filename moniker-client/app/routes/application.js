import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        console.log(this.store.findRecord('profile', 'test'));
        return;
    },

    actions: {
        error(error, transition) {
            if (error) {
                if (error.status == '404') {
                    return this.transitionTo('page-not-found');
                } else {
                    return console.log('error: ' + error);
                }   
            }
        }
    }
});
