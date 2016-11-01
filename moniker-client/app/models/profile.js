import DS from 'ember-data';

export default DS.Model.extend({
    Url: DS.attr('string'),
    SocialData: DS.hasMany('social')
});
