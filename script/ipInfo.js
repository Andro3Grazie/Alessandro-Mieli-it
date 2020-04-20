window.onload = function () {

    oldCookie = getCookie('cookieconsent_status');

    var x = this.setInterval(function() {
        if(getCookie('cookieconsent_status') != oldCookie) {
            oldCookie = getCookie('cookieconsent_status');
            if(oldCookie == 'deny') {
                deleteCookies('language');
            }
        }
    }, 1000);


    $.getJSON("https://ipinfo.io/geo", function (data) {

        // Get country name
        var country = data.country;
        checkLan(country);

        // checkCountry(country);

        
        /* (Temporarily Discontinued)
        
        // Get latitude and longitude
        var coordinate = data.loc.split(",");

        $.getJSON(`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinate[0]}&lon=${coordinate[1]}&appid=d35e3310d721b8d531e621c926bf4c2a`, function (informazioniZona) {
            
            // Get sunrise and sunset
            alba = informazioniZona.current.sunrise;
            tramonto = informazioniZona.current.sunset
            
            // chekTheme();
            // resetColor();


            // Check if Day/Night every 60 seconds
            var x = setInterval(function () {
                chekTheme();
            }, 60000);
        });
        */
    });
};
