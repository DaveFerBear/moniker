import DS from 'ember-data';

export default DS.Model.extend({
    SocialMediaSite: DS.attr('string'),
    SocialHandle: DS.attr('string')
});
