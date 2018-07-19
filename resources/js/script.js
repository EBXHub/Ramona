$(document).ready(function () {


    /* Sticky Navigation */
	$('.js--nav').waypoint(function(direction) {
		if(direction == 'down') {
		   $('nav').addClass('sticky');
		} else {
			$('nav').removeClass('sticky');
		}
	})
	
	// Products slider
	$('#slider').owlCarousel({
		margin: 0,
		//loop: true,
		//width: 1050,
		items: 5,
		animateIn: 'fadeIn',
    	mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		navigation: true,
		navText: ["<ion-icon name=\"ios-arrow-back\"></ion-icon>", "<ion-icon name=\"ios-arrow-forward\"></ion-icon>"],
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav: true
			},
			560:{
				items:2,
				nav: true
			},
			781: {
				items:3,
				nav: true
			},
			1024:{
				items:4,
				nav: true
			}
		}
	});
	
	 var owl = $('.owl-carousel');
        owl.owlCarousel();
        // Go to the next item
        $('.owl-next').click(function() {
            owl.trigger('next.owl.carousel');
        })
        // Go to the previous item
        $('.owl-prev').click(function() {
            // With optional speed parameter
            // Parameters has to be in square bracket '[]'
            owl.trigger('prev.owl.carousel', [300]);
    });
	
    // Select all links with hashes
    $('a[href*="#"]')
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function (event) {
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
          &&
          location.hostname == this.hostname
        ) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                return false;
              } else {
                $target.attr('tabindex','-1'); 
                $target.focus(); 
              };
            });
          }
        }
      });

      /* Animations on scroll */
    $('.js--wp-1').waypoint(function () {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-2').waypoint(function () {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-3').waypoint(function () {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-4').waypoint(function () {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });
	
	$(function() {
		$('a[href*="#"]:not([href="#"])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: target.offset().top
						  }, 1000);
						  return false;
					}
			}
		});
	});
	
});

setTimeout(function() {
	var popup_box = document.getElementById('popup-box');
	popup_box.style.display = 'block';	
},
   3000);

function close_popup() {
	var popup_box = document.getElementById('popup-box');
	if(popup_box.style.display === 'none') {
		popup_box.style.display = 'block';
	} else {
		popup_box.style.display = 'none';
	}
}

































