import Ember from 'ember';

export default Ember.Component.extend({
    inputVal: "",
    actions: {
        keyUp: function() {
            //TODO: validate URL
            this.sendAction('action', this.get('attr.name'), this.inputVal); //send name and input value
        }
    }
});
