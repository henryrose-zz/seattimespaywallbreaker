

var hidePaywall = function () {

    var $paywall = $('.hard_paywall');

    $paywall.remove();

};

var enableScroll = function () {

    var $body = $("body");

    $body.css("position", "static")

};


hidePaywall();
enableScroll();