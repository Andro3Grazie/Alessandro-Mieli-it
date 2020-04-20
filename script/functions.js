/* -------------------- Variables -------------------- */
var pc = "(min-width: 993px)";
var largeTablet = "(max-width: 992px)";
var tablet = "(max-width: 768px)";
var smartphone = "(max-width: 576px)";
var smallSmartphone = "(max-width: 343px)";

/* -------------------- Window on load -------------------- */
window.onload = function () {
    $.getJSON("https://ipinfo.io/geo", function (data) {
        // Get country name -> IT
        changeLanSite(data.country);
    });
};

/* -------------------- Open/Close navbar on mobile -------------------- */
function openNav() {
    document.getElementById("navbarSupportedContent").style.width = "100%";
    $('body').addClass('overflow-none');
}
function closeNav() {
    document.getElementById("navbarSupportedContent").style.width = "0";
    $('body').removeClass('overflow-none');
}

/* -------------------- Change color on contact link hover -------------------- */
$(document).ready(function () {
    $('#contact-item-a').hover(function () {
        $('#contact-item-b').toggleClass('contact-item-hover');
        $('#contact-item-c').toggleClass('contact-item-hover');
    }),
        $('#contact-item-b').hover(function () {
            $('#contact-item-a').toggleClass('contact-item-hover');
            $('#contact-item-c').toggleClass('contact-item-hover');
        }),
        $('#contact-item-c').hover(function () {
            $('#contact-item-a').toggleClass('contact-item-hover');
            $('#contact-item-b').toggleClass('contact-item-hover');
        });
});

/* -------------------- Scroll to Top Button -------------------- */
$(window).scroll(function () {
    // If page is scrolled more than 50px
    if ($(this).scrollTop() >= 50) {
        // Fade in the arrow
        $('#return-to-top').fadeIn(200);
    } else {
        // Else fade out the arrow
        $('#return-to-top').fadeOut(200);
    }
});
// When arrow/nav-title is clicked
$("#return-to-top,#return-to-top-mobile").click(function () {
    // Scroll to top of body
    $('body,html').animate({
        scrollTop: 0
    }, 500);
});

/* -------------------- Scroll to contact me -------------------- */
$('#contactme-link').click(function () {
    var el = document.querySelector("#contactme-section");
    // scroll to element
    el.scrollIntoView({ behavior: 'smooth' });
});


