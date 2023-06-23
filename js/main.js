(function ($) {
    "use strict";
    $(".embed-responsive iframe").addClass("embed-responsive-item");
    $(".carousel-inner .item:first-child").addClass("active");

    $('[data-toggle="tooltip"]').tooltip();


    $('#mobile-menu-active').meanmenu({
        meanScreenWidth: "767",
        meanMenuContainer: '.menu-prepent',
    });

    $('.menu-open').click(function () {

        $('.body-left-bar').toggleClass('activee');
        $('.menu-open').toggleClass('toggle');

    });

    // scrollUp
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '<i class="fa fa-angle-up"></i>', // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });
   
    new WOW().init();
    //menu bar
    $('#mobile-menu').meanmenu({
        meanMenuContainer: ".mobile-menu",
        meanScreenWidth: "991",
        onePage: true
    });
    //data background
    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    })

    // mainSlider
	function mainSlider() {
		var BasicSlider = $('.slider-active');
		BasicSlider.on('init', function (e, slick) {
			var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
			doAnimations($firstAnimatingElements);
		});
		BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
			var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
			doAnimations($animatingElements);
		});
		BasicSlider.slick({
			autoplay: false,
			autoplaySpeed: 10000,
			dots: false,
			fade: true,
			arrows: true,
            prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
			responsive: [
				{ breakpoint: 767, settings: { dots: false, arrows: false } }
			]
		});

		function doAnimations(elements) {
			var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			elements.each(function () {
				var $this = $(this);
				var $animationDelay = $this.data('delay');
				var $animationType = 'animated ' + $this.data('animation');
				$this.css({
					'animation-delay': $animationDelay,
					'-webkit-animation-delay': $animationDelay
				});
				$this.addClass($animationType).one(animationEndEvents, function () {
					$this.removeClass($animationType);
				});
			});
		}
	}
	mainSlider();
    // owlCarousel
    $(".testimonial-active").owlCarousel({
        items: 1,
        nav: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        dots: true,
        loop: true,
        margin: 0,
        autoplay: false,
        autoplayTimeout: 3000,
        smartSpeed: 1000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,

            },
            768: {
                items: 1,

            },
            1000: {
                items: 1,

            }
        }


    });

    // owlCarousel
    $(".brand-active").owlCarousel({
        items: 1,
        nav: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        dots: false,
        loop: true,
        margin: 0,
        autoplay: false,
        autoplayTimeout: 3000,
        smartSpeed: 1000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,

            },
            500: {
                items: 2,

            },
            768: {
                items: 3,

            },
            992: {
                items: 4,

            },
            1000: {
                items: 5,

            }
        }


    });
   
    // slick slider
    $('.testimonial-activ').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        fade: true,
        asNavFor: '.test-img-active'
    });
    $('.test-img-active').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.testimonial-activ',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '0px',
        arrows: false,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true
                }
            },
        ]
    });
    // active
    $('.test').on('mouseenter', function () {
        $(this).addClass('active').parent().sidelinges().find('.test').removeClass('active');
    });
    // preoloader
    $(window).on('load',function() {
        //$("#loading").delay(2000).fadeOut(500);
        $("#loading").fadeOut(500);
    });
    
    
    
    // one page nav
    var top_offset = $('.header-area').height() - 10;
    $('.main-manu nav ul').onePageNav({
        currentClass: 'active',
        scrolloffset: top_offset,
    });
    
    // header sticky
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 5) {
            $('#header-sticky').removeClass("sticky");
        } else {
            $("#header-sticky").addClass(".sticky");
        }
    });

    // header stiky
	$(".header-sticky").sticky({ topSpacing: 0 });
    
    // video popup
    $('.video-popup').magnificPopup({
        type: 'iframe',
    });
    // img popup
    $('.popup-image').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    // wavify
    $('#wave').wavify({
        height: 60,
        bones: 5,
        amplitude: 50,
        color: '#0bd',
        speed: .5
      });

    //   firefly
    $.firefly({
        color: '#f00',
        minPixel: 3,
        maxPixel: 10,
        total : 65,
        on: '#firefly'
    });

    // starlite
    
	var user_configuration={
	    // "circle" or "square"
	    shape:"circle",
	    // star size in pixels
	    initial_size:"12px",
	    // final size of the stars after expansion
	    final_size:"64px",
	    // how fast the stars get bigger, in milliseconds
	    expand_speed:"1s",
	    // how long until the star fades out
	    fade_delay:"0.5s",
	    // how long the star fades for
	    fade_duration:"0.5s",
	    // The variety of colors of the stars. Can be any CSS complient color (eg. HEX, rgba, hsl
	    colors:["hsla(62, 50%,50%, 0.5)", "rgba(255,255,255,0.5)","hsla(180, 72%, 52%, 0.5)"],
	    // how often a new wave of stars pop-out (in milliseconds. Bigger==longer)
	    frequency:100,
	    // how many stars pop out per wave
	    density: 1,
	    // whether the stars disappear after they are created
	    keep_lit: false,
	    // whether the stars rotate through out their expansion
	    rotation: true,
	    // how much of the element's area the stars will show up in (0-1)
	    coverage:1,
	    // the elements the script will target based on the class name
	    target_class:'.starlight'
	};
    

   

    // isotop

    $('.grid').imagesLoaded(function () {

        // init Isotope

        var $grid = $('.grid').isotope({

            itemSelector: '.grid-item',

            percentPosition: true,

            masonry: {

                // use outer width of grid-sizer for columnWidth

                columnWidth: '.grid-item',

            }

        });

        // filter items on button click

        $('.portfolio-menu').on('click', 'button', function () {

            var filterValue = $(this).attr('data-filter');

            $grid.isotope({ filter: filterValue });

        });

    });



    //for menu active class

    $('.portfolio-menu button').on('click', function (event) {

        $(this).siblings('.active').removeClass('active');

        $(this).addClass('active');

        event.preventDefault();

    });

   

    // kki
    $('.piechart').easyPieChart({
        scaleColor: "transparent",
        lineWidth: 10,
        lineCap: 'round', //Can be butt
        barColor: '#000',
        trackColor: "tomato",
        size: 280,
        rotate: 0,
        animate: 2000,


    });

   

    // circle bars knob
    if (typeof ($.fn.knob) != 'undefined') {
        $('.knob').each(function () {
            var $this = $(this),
                knobVal = $this.attr('data-rel');
            $this.knob({
                'draw': function () {
                    $(this.i).val(this.cv + "%")
                }
            });
            $this.appear(function () {
                $({
                    value: 0
                }).animate({
                    value: knobVal
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.val(Math.ceil(this.value)).trigger('change');
                    }
                });
            }, { accX: 0, accY: -150 });
        });
    }
    
    

    

    // counter
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });



    // google map

    function basicmap() {

        // Basic options for a simple Google Map

        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions

        var mapOptions = {

            // How zoomed in you want the map to start at (always required)

            zoom: 11,

            scrollwheel: false,

            // The latitude and longitude to center the map (always required)

            center: new google.maps.LatLng(23.935169, 89.000893), // New York

            // This is where you would paste any style found on Snazzy Maps.

            styles: [
                {
                    "featureType": "all",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 13
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#000000"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#144b53"
                        },
                        {
                            "lightness": 14
                        },
                        {
                            "weight": 1.4
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#08304b"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#0c4152"
                        },
                        {
                            "lightness": 5
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#000000"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#0b434f"
                        },
                        {
                            "lightness": 25
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#000000"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#0b3d51"
                        },
                        {
                            "lightness": 16
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#000000"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#146474"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#021019"
                        }
                    ]
                }
            ]

        };

        // Get the HTML DOM element that will contain your map

        // We are using a div with id="map" seen below in the <body>

        var mapElement = document.getElementById('contact-map');



        // Create the Google Map using our element and options defined above

        var map = new google.maps.Map(mapElement, mapOptions);



        // Let's also add a marker while we're at it

        var marker = new google.maps.Marker({

            position: new google.maps.LatLng(23.935169, 89.000893),

            map: map,

            title: 'Cryptox'

        });

    }

    if ($('#contact-map').length != 0) {

        google.maps.event.addDomListener(window, 'load', basicmap);

    }


// circle bars knob

    jQuery(window).load(function () {


    });
})(jQuery);


