/* -------------------- Variables -------------------- */
var alba;
var tramonto; 
var darkMode = false;
var pc = "(min-width: 993px)";
var largeTablet = "(max-width: 992px)";
var tablet = "(max-width: 768px)";
var smartphone = "(max-width: 576px)";
var smallSmartphone = "(max-width: 343px)";

/* -------------------- Daylight or Nighttime -------------------- */
// (Temporarily Discontinued)
function checkTime() {
    currentDate = Math.round(new Date().getTime()/1000);
    
    if (currentDate >= alba || currentDate <= tramonto) {
        // Daylight
        return true;
    }
    else {
        // Nighttime
        return false;
    }
}

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
$(document).ready(function() {
    $('#contact-item-a').hover(function(){     
        $('#contact-item-b').toggleClass('contact-item-hover');
        $('#contact-item-c').toggleClass('contact-item-hover');
    }),
    $('#contact-item-b').hover(function(){
        $('#contact-item-a').toggleClass('contact-item-hover');
        $('#contact-item-c').toggleClass('contact-item-hover');
    }),
    $('#contact-item-c').hover(function(){
        $('#contact-item-a').toggleClass('contact-item-hover');
        $('#contact-item-b').toggleClass('contact-item-hover');
    });
});

/* -------------------- Scroll to Top Button -------------------- */
$(window).scroll(function() {
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
$("#return-to-top,#return-to-top-mobile").click(function(){
    // Scroll to top of body
    $('body,html').animate({
        scrollTop : 0
    }, 500);
});

/* -------------------- Scroll to contact me -------------------- */
$('#contactme-link').click(function() {
    var el = document.querySelector("#contactme-section");
    // scroll to element
    el.scrollIntoView({ behavior: 'smooth' });
});

/* -------------------- Cookies -------------------- */
function setCookie(cName, language) {
    document.cookie = cName + "=" + language + ";path=/";
}
function getCookie(cName) {
    var name = cName + "=";
    var ca = document.cookie.split(';');
    
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {            
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {            
            return c.substring(name.length, c.length);
        }
    }
    return false;
}