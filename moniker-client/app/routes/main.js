import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return [
        {
            name: "Facebook",
            color: "rgb(1, 38, 119)",
            logo: "http://www.pngall.com/wp-content/uploads/2016/07/Facebook.png",
            textColor: "white"
        },
        {
            name: "Twitter",
            color: "rgb(0, 171, 236)",
            logo: "http://www.pngall.com/wp-content/uploads/2016/07/Twitter-Download-PNG.png"

        },
        {
            name: "Youtube",
            color: "red",
            logo: "http://www.pngall.com/wp-content/uploads/2016/07/Youtube-Free-Download-PNG.png"
        },
        {
            name: "Vine",
            color: "rgb(0, 200, 146)",
            logo: "http://static.wixstatic.com/media/74143e_e60d1c617c1f4bd99d0390c744214bb3.png_srz_221_195_85_22_0.50_1.20_0.00_png_srz"
        },
        {
            name: "Instagram",
            color: "rgb(230, 228, 192)",
            logo: "http://3835642c2693476aa717-d4b78efce91b9730bcca725cf9bb0b37.r51.cf1.rackcdn.com/Instagram_App_Large_May2016_200.png"
        },
        {
            name: "Snapchat",
            color: "yellow",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Snapchat_Logo.png/480px-Snapchat_Logo.png"
        },
        {
            name: "Reddit",
            color: "white",
            logo: "http://vignette3.wikia.nocookie.net/soccerspirits/images/1/10/Reddit.png/revision/latest?cb=20141230145232"
        },
        {
            name: "Pinterest",
            color: "rgb(247, 156, 162)",
            logo: "http://www.homeloans.com.au/wp-content/uploads/2015/10/social-media-icon-pinterest.png"
        },
        {
            name: "Tumblr",
            color: "rgb(41, 80, 107)",
            logo: "http://www.freeiconspng.com/uploads/tumblr-logo-icon-1.png",
            textColor: "rgb(220, 220, 220)"
        },
        {
            name: "LinkedIn",
            color: "rgb(30, 32, 34)",
            logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
            textColor: "white"
        },
        {
            name: "Google+",
            color: "rgb(0, 110, 197)",
            logo: "http://www.freeiconspng.com/uploads/google-plus-logo-grey-white-hd-wallpaper-9.png"
        },
        {
            name: "Email",
            color: "rgb(100, 150, 255)",
            logo: "http://icons.iconarchive.com/icons/cornmanthe3rd/squareplex/512/Communication-email-2-icon.png"
        }
        ];    
    }
    
});
