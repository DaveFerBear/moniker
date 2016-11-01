import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    host: 'http://ec2-54-191-92-106.us-west-2.compute.amazonaws.com',
    namespace: 'getMoniker'
});
