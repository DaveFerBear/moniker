var eventsAttached = false;


$(document).ready(function(){ //wait for page to load then attach our events
  attachEvents();
})

function socialURL(social, url) {
    this.social = social;
    this.url = url != "" ? url : null;
}

function createMoniker() {
    var data = getSocialURLs();
    $.ajax({
        url: "/api/Moniker",
        type: "POST",
        dataType: 'json',
        data: data
    }).done(function(data) {
        //CALLBACK GOES HERE
        redirectToMonikerView();
    });
}

function getSocialURLs() {
    var socialURLs = [];
    var $socialContainers = $(".social");

    for (var i = 0; i < $socialContainers.length; i++) {
        var socialName = $($socialContainers[i]).data("social");
        var urlVal = $($socialContainers[i]).find("input").val();
        socialURLs.push(new socialURL(socialName, urlVal));
    }

    return socialURLs;
}

function checkURLAvailability(url) {
    $.ajax({
        url: "/api/Url/" + url,
        type: "Get",
        dataType: 'json'
    }).done(function(data) {
        var isValidURL = false; //replace with logic
        if (!isValidURL) showErrorMessage("URL not Available")
    });
}

function verifyFacebookURL(url) {
    var isValidURL = false; //replace with logic
    if (!isValidURL) showErrorMessage("Facebook URL not valid")
}

function attachEvents() {
    if (eventsAttached) return false; //making sure we only attach events once.

    $(".submit")
        .on("click",
            function() {
                createMoniker();
            });


    eventsAttached = true;
}

function redirectToMonikerView() {
    //test
}


function showErrorMessage(errorText) {
    $(".errorContainer .text").text(errorText);
    $(".errorContainer").slideDown("fast", function() {
        //once animation is complete wait 5 seconds then hide it
        window.setTimeout(function() {
            $(".errorContainer").slideUp("fast");
        }, 5000);
    });
}
