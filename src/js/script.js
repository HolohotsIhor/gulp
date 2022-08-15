@@include('../libs/jquery/jquery.min.js');
@@include('../libs/bootstrap/bootstrap.min.js');
@@include('../libs/owlCarousel2-2.3.4/dist/owl.carousel.min.js');

$(document).ready(function() {
    /* Burger */
    $(".toggle_mnu").click(function() {
        $(".sandwich").toggleClass("active");
    });
    /* Burger. Hover */
    $(".top_mnu ul a").click(function() {
        $(".top_mnu").fadeOut(600);
        $(".sandwich").toggleClass("active");
        $(".top_text").css("opacity", "1");
    });

    /* Burger. Open and close */
    $(".toggle_mnu").click(function() {
        if ($(".top_mnu").is(":visible")) {
            $(".top_text").css("opacity", "1");
            $(".top_mnu").fadeOut(600);
        } else {
            $(".top_text").css("opacity", ".1");
            $(".top_mnu").fadeIn(600);
        };
    });

    /* Owl carousel */
    var owl = $('.carousel-one');
    owl.owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 100000,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            960: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    });



    /*********** Scrool to top ************/
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 0);
        return false;
    });
}); 