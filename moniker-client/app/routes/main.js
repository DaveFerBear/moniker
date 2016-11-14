import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return {
            networks: this.networkData
            //add more UI properties
        };    
    },

    networkData: [
        {
            name: "Facebook",
            color: "rgb(1, 38, 119)",
            logo: "http://www.pngall.com/wp-content/uploads/2016/07/Facebook.png",
            textColor: "white",
            inputText: "facebook.com/",
            input: null,
            valid: true
        },
        {
            name: "Twitter",
            color: "rgb(0, 171, 236)",
            logo: "http://www.pngall.com/wp-content/uploads/2016/07/Twitter-Download-PNG.png",
            inputText: "@",
            input: null,
            valid: true

        },
        {
            name: "Youtube",
            color: "red",
            logo: "http://www.pngall.com/wp-content/uploads/2016/07/Youtube-Free-Download-PNG.png",
            inputText: "youtube.com/",
            input: null,
            valid: true
        },
        {
            name: "Vine",
            color: "rgb(0, 200, 146)",
            logo: "http://static.wixstatic.com/media/74143e_e60d1c617c1f4bd99d0390c744214bb3.png_srz_221_195_85_22_0.50_1.20_0.00_png_srz",
            inputText: "@",
            input: null,
            valid: true
        },
        {
            name: "Instagram",
            color: "rgb(230, 228, 192)",
            logo: "http://3835642c2693476aa717-d4b78efce91b9730bcca725cf9bb0b37.r51.cf1.rackcdn.com/Instagram_App_Large_May2016_200.png",
            inputText: "@",
            input: null,
            valid: true
        },
        {
            name: "Snapchat",
            color: "yellow",
            logo: "http://logos-download.com/wp-content/uploads/2016/07/Snapchat_logo-700x700.png",
            inputText: "@",
            input: null,
            valid: true
        },
        {
            name: "Reddit",
            color: "white",
            logo: "http://vignette3.wikia.nocookie.net/soccerspirits/images/1/10/Reddit.png/revision/latest?cb=20141230145232",
            inputText: "Username",
            input: null,
            valid: true
        },
        {
            name: "Pinterest",
            color: "rgb(247, 156, 162)",
            logo: "http://www.homeloans.com.au/wp-content/uploads/2015/10/social-media-icon-pinterest.png",
            inputText: "Username",
            input: null,
            valid: true
        },
        {
            name: "Tumblr",
            color: "rgb(41, 80, 107)",
            logo: "http://www.freeiconspng.com/uploads/tumblr-logo-icon-1.png",
            textColor: "rgb(220, 220, 220)",
            inputText: "Username",
            input: null,
            valid: true
        },
        {
            name: "LinkedIn",
            color: "rgb(30, 32, 34)",
            logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
            inputText: "linkedin.com/in/",
            textColor: "white"
        },
        {
            name: "Google+",
            color: "rgb(0, 110, 197)",
            logo: "http://www.freeiconspng.com/uploads/google-plus-logo-grey-white-hd-wallpaper-9.png",
            inputText: "Username",
            input: null,
            valid: true
        },
        {
            name: "Email",
            color: "rgb(100, 150, 255)",
            logo: "http://icons.iconarchive.com/icons/cornmanthe3rd/squareplex/512/Communication-email-2-icon.png",
            input: null,
            valid: true
        }
    ],
    monikerUrl: "",
    baseUrl: "http://159.203.93.160/",

    constructRequestBody: function() {
        var body = {
            URL: this.monikerUrl,
            SocialData: []
        };
        for (var x = 0; x < this.networkData.length; x++) {
            var data = {
                SocialMediaSite: this.networkData[x].name,
                SocialHandle: this.networkData[x].input
            };
            if (data.SocialHandle != null) {
                body.SocialData.push(data);
            }
        }
        return body;
    },

    actions: {
        urlKeyUp: function(input) {
            console.log('urlKeyUp');
            this.monikerUrl = input;
            if (input != "") {
                $.ajax({
                    type: "GET",
                    url: this.baseUrl + "validateURL/" + this.monikerUrl,
                    success: function(data) {
                        console.log(data);
                        $("#url-input").toggleClass("has-success has-error");
                    }
                });
            }
        },

        keyUp: function(name, input) {
            console.log('keyUp');
            for (var x = 0; x < this.networkData.length; x++) {
                if (name == this.networkData[x].name) {
                    this.networkData[x].input = input;
                }
            }
        },

        submit: function() {
            var body = this.constructRequestBody();
            console.log(body);
            $.ajax({
                type: "POST",
                url: this.baseUrl + "create",
                data: body,
                success: function(data) {
                    console.log(data);
                }
            });
        }
    }
});
