import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host: 'http://ec2-54-191-92-106.us-west-2.compute.amazonaws.com',

    pathForType: function(type) { //removes pluralization, can also be used for camelCase
        return type;
    },
});
