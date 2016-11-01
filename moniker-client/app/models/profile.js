import DS from 'ember-data';

export default DS.Model.extend({
    Url: "Nick",
    SocialData: [
        {
            SocialMediaSite: "twitter",
            SocialHandle: "nhaughto"
        },
        {
          SocialMediaSite: "facebook",
          SocialHandle: "nhaughto"
        },
        {
          SocialMediaSite: "youtube",
          SocialHandle: "nhaughto"
        }
    ]
});
