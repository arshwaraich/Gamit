//jquery -----------------------------------------------------

$(document).ready(function () {

    //menu
    $("#logo-container").click(function () {
        $('html,body').animate({
            scrollTop: $("#featured-display").offset().top
        }, 'fast');
    });

    $("#option1").click(function () {
        $('html,body').animate({
            scrollTop: $("#featured-display").offset().top
        }, 'fast');
    });

    $("#option2").click(function () {
        $('html,body').animate({
            scrollTop: $("#games-display").offset().top
        }, 'fast');
    });

    $("#option3").click(function () {
        $('html,body').animate({
            scrollTop: $("#info-display").offset().top
        }, 'fast');
    });

    $("#option4").click(function () {
        $('html,body').animate({
            scrollTop: $("#select-menu").offset().top
        }, 'fast');
    });

    //featured links
    $("#gamedev").click(function () {
        $('html,body').animate({
            scrollTop: $("#unity").offset().top
        }, 'fast');
    });

    $("#collabs").click(function () {
        $('html,body').animate({
            scrollTop: $("#github").offset().top
        }, 'fast');
    });

    $("#supports").click(function () {
        $('html,body').animate({
            scrollTop: $("#developer").offset().top
        }, 'fast');
    });

    //other buttons
    $("#featured-display button").click(function () {
        $('html,body').animate({
            scrollTop: $("#featured-display").offset().top
        }, 'fast');
    });

    $("#info-display #developer #dev-desc button").click(function () {
        $('html,body').animate({
            scrollTop: $("#developer").offset().top
        }, 'fast');
    });

    //errors [TEMPORARY]
    $("#error #error-image").click(function () {
        $("#error").slideUp("fast");
    });

    $("#option4").click(function () {
        $("#error").slideDown("fast").css("display", "block");
    });

    $("#featured-display #feature-container button").click(function () {
        $("#error").slideDown("fast").css("display", "block");
    });

    $("#info-display #developer #dev-desc button").click(function () {
        $("#error").slideDown("fast").css("display", "block");
    });
});

//js -------------------------------------------------
