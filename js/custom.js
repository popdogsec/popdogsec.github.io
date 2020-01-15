/*
    Theme Name: Basma Resume
    Description: Basma Resume / CV Template
    Version: 1.0
    Author: themearabia
    Website: http://themearabia.net 
*/

/*--------------------------------------
[  Table of contents  ]
----------------------------------------
:: Preloader
:: open hash section in load
:: main menu
:: menu toggle phone
:: typed
:: porfolio isotope and filter
:: lightcase
:: owl Carousel testimonial
:: google maps
:: progress bar
:: background video
----------------------------------------
[ End table content ]
--------------------------------------*/


(function ($) {
    "use strict";

    /*--------------------------------------
    :: Preloader
    --------------------------------------*/
    $(window).on('load', function () {
        
        $('.loader-overlay').fadeOut('slow', function() {
            //$(this).remove();
        });
        
    });
    
    /*--------------------------------------
    :: open hash section
    --------------------------------------*/
    if (location.hash) {
        var pageid = location.hash;
        $('#header-main-menu li a').removeClass('active');
        $('a[href="' + pageid + '"]').addClass('active');
        $('.section-page').removeClass('fadeInLeft active');
        $(pageid).addClass('fadeInLeft active');

        /* paly and pause video */
        if (pageid == '#home' && $('#bgndVideo').length) {
            $('#bgndVideo').mb_YTPlayer().YTPPlay();
        }
        else if ($('#bgndVideo').length) {
            $('#bgndVideo').mb_YTPlayer().YTPPause();
        }

        if (pageid == '#portfolio') {
            $('.filter-click').click();
        }

        $("html,body").animate({
            scrollTop: 0
        }, 10);
    }
    
    /*--------------------------------------
    :: main menu
    --------------------------------------*/
    $('#header-main-menu li a').on('click', function () {
        var pageid = $(this).attr('href');
        $('#header-main-menu li a').removeClass('active');
        $(this).addClass('active');
        $('.section-page').removeClass('fadeInLeft active');
        $(pageid).addClass('fadeInLeft active');
        
        /* paly and pause video */
        if (pageid == '#home' && $('#bgndVideo').length) {
            $('#bgndVideo').mb_YTPlayer().YTPPlay();
        }
        else if ($('#bgndVideo').length) {
            $('#bgndVideo').mb_YTPlayer().YTPPause();
        }
        
        if (pageid == '#portfolio') {
            $('.filter-click').click();
        }

        $("html,body").animate({
            scrollTop: 0
        }, 10);

    });

    /*--------------------------------------
    :: menu toggle phone
    --------------------------------------*/
    $('.menu-toggle').on("click", function () {
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            $('.header').addClass('open');
        } else {
            $(this).removeClass('active');
            $('.header').removeClass('open');
        }
        return false;
    });
    /* close menu */
    $('.header li a').on("click", function () {
        $('.menu-toggle').removeClass('active');
        $('.header').removeClass('open');
    });

    /*--------------------------------------
    :: typed
    --------------------------------------*/
    $(".typed").typed({
        stringsElement: $('.typed-strings'),
        typeSpeed: 30,
        backDelay: 750,
        loop: true,
        autoplay: true,
        autoplayTimeout: 750,
        contentType: 'html',
        loopCount: true,
        resetCallback: function () {
            newTyped();
        }
    });

    /*--------------------------------------
    :: porfolio isotope and filter
    --------------------------------------*/
    $(window).on('load', function () {
        var portfolioIsotope = $('.portfolio-container').isotope({
            itemSelector: '.portfolio-item'
        });
        $('#portfolio-flters li').on('click', function () {
            $("#portfolio-flters li").removeClass('filter-active');
            $(this).addClass('filter-active');

            portfolioIsotope.isotope({
                filter: $(this).data('filter')
            });
        });
    });

    /*--------------------------------------
    :: lightcase
    --------------------------------------*/
    $('[data-rel^=lightcase]').lightcase({
        maxWidth: 1100,
        maxHeight: 800
    });

    /*--------------------------------------
    :: owl Carousel - testimonial
    --------------------------------------*/
    $('.owl-testimonial').owlCarousel({
        autoplay: true,
        loop: true,
        margin: 20,
        dots: true,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            768: {
                items: 1
            },
            1200: {
                items: 2
            }
        }
    });

    /*--------------------------------------
    :: google maps
    --------------------------------------*/
    if ($('#google-map').length > 0) {
        //set your google maps parameters
        var latitude = $('#google-map').data('latitude'),
            longitude = $('#google-map').data('longitude'),
            map_zoom = $('#google-map').data('zoom'),
            marker_url = $('#google-map').data('marker');
        //set google map options
        var map_options = {
            center: new google.maps.LatLng(latitude, longitude),
            zoom: map_zoom,
            panControl: true,
            zoomControl: true,
            mapTypeControl: true,
            streetViewControl: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false,
        }
        //inizialize the map
        var map = new google.maps.Map(document.getElementById('google-map'), map_options);
        //add a custom marker to the map				
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(latitude, longitude),
            map: map,
            visible: true,
            icon: marker_url,
        });
    }
    
    /*--------------------------------------
    :: progress bar
    --------------------------------------*/
    $(window).on('scroll', function () {
        $(".skill-progress .progres").each(function () {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height() + 25;
            $(this).css({width : '0%'});
            if(bottom_of_window > bottom_of_object) {
                $(this).css({width : $(this).attr('data-value')});
            }
        });
    });
    
    /*--------------------------------------
    :: background video
    --------------------------------------*/
    if ($('#bgndVideo').length) {
        $('#bgndVideo').mb_YTPlayer();
    }
        
})(jQuery);