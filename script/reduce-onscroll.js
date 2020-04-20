window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (window.matchMedia(pc).matches) {
        document.getElementById("navbar-scroll").style.padding = "2.5rem 1rem";
    }
    if (window.matchMedia(largeTablet).matches) {
        // large tablet
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.getElementById("navbar-scroll").style.padding = ".5rem 1rem";
            document.getElementById("navbar-scroll-title").style.fontSize = "26px";
        } else {
            document.getElementById("navbar-scroll").style.padding = "1.25rem 1rem";
            document.getElementById("navbar-scroll-title").style.fontSize = "36px";
        }
    }
    if (window.matchMedia(tablet).matches) {
        // tablet
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.getElementById("navbar-scroll-title").style.fontSize = "26px";
        } else {
            document.getElementById("navbar-scroll-title").style.fontSize = "32px";
        }
    }
    if (window.matchMedia(smartphone).matches) {
        // smartphone
            document.getElementById("navbar-scroll-title").style.fontSize = "22px";
    }
    if (window.matchMedia(smallSmartphone).matches) {
        // small smartphone
        document.getElementById("navbar-scroll-title").style.fontSize = "18px";
    }
}
