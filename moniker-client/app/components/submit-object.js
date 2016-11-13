import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        monikerKeyUp: function() {
            console.log('validatemoniker');
        },
        submit: function() {
            this.sendAction('action');
        }
    }
});
