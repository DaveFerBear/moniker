import Ember from 'ember';

export default Ember.Component.extend({
    inputVal: "",
    actions: {
        urlKeyUp: function() {
            this.sendAction('action', this.inputVal);
        },
        submit: function() {
            this.sendAction('action');
        }
    }
});
