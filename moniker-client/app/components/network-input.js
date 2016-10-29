import Ember from 'ember';

export default Ember.Component.extend({
    inputVal: "",
    actions: {
        keyUp: function() {
            console.log(this.inputVal);
            this.sendAction(this.model.name, 'inputVal ');
        }
    }
});
