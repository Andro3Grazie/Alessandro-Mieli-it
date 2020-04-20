/* --------------------
add stylesheet to invert page's colour (functions)
---------------------*/
function invertColor() {
    var link = document.createElement( "link" );
    link.rel = "stylesheet";
    link.href = "/style/invert-color.css";
    link.id = "invertColor";

    document.getElementsByTagName("head")[0].appendChild(link);

    $('#lumusCss').remove();
    $('#lumus').addClass('display-none');

    var link = document.createElement( "link" );
    link.rel = "stylesheet";
    link.href = "/style/nox.css";
    link.id = "noxCss";

    document.getElementsByTagName("head")[0].appendChild(link);

    // Nox letters
    $('#nox').removeClass('display-none');

    // Invert hobbies images color
    $('.hobbies-img').addClass('display-none');
    $('.hobbies-img-inverted').removeClass('display-none');

    // Invert heart 
    $('.full-heart').addClass('display-none');
    $('.outline-heart').removeClass('display-none');
}

/* --------------------
remove stylesheet to reset page's colour (functions)
---------------------*/
function resetColor() {
    $( "#invertColor" ).remove();
    $('#noxCss').remove();
    $('#nox').addClass('display-none');

    var link = document.createElement( "link" );
    link.rel = "stylesheet";
    link.href = "/style/lumus.css";
    link.id = "lumusCss";

    document.getElementsByTagName("head")[0].appendChild(link);

    // Nox letters
    $('#lumus').removeClass('display-none');

    // Reset hobbies images color
    $('.hobbies-img-inverted').addClass('display-none');
    $('.hobbies-img').removeClass('display-none');

    // Reset heart 
    $('.full-heart').removeClass('display-none');
    $('.outline-heart').addClass('display-none');
}

/* --------------------
Check the page's color
---------------------*/ 
// (daylight.js)
function chekTheme() {
    if (checkTime()) {
        // Nighttime
        if(!darkMode) {
            invertColor();
            darkMode = true;
        }
    }
    else {
        // Daylight
        if (darkMode) {
            // resetColor();
            darkMode = false;
        }
    }
}