import Ember from 'ember';

export default Ember.Component.extend({
    inputVal: "",
    actions: {
        keyUp: function() {
            console.log(this.inputVal);
            this.sendAction('keyUp', this.get('attr.name'), this.inputVal); //send name and input value
        }
    }
});
