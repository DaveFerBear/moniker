import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        keyPressed: function() {
            console.log("keyPressed");
        }
    }
});
