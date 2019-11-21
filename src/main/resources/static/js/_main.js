 /**
 * This demo was prepared for you by Petr Tichy - Ihatetomatoes.net
 * Want to see more similar demos and tutorials?
 * Help by spreading the word about Ihatetomatoes blog.
 * Facebook - https://www.facebook.com/ihatetomatoesblog
 * Twitter - https://twitter.com/ihatetomatoes
 * Google+ - https://plus.google.com/u/0/109859280204979591787/about
 * Article URL: http://ihatetomatoes.net/simple-parallax-scrolling-tutorial/
 */

( function( $ ) {
	
	// Setup variables
	$window = $(window);
	$slide = $('.homeSlide');
	$body = $('body');
	
    //FadeIn all sections   
	$body.imagesLoaded( function() {
		setTimeout(function() {
		      
		      // Resize sections
		      adjustWindow();
		      
		      // Fade in sections
			  $body.removeClass('loading').addClass('loaded');
			  
		}, 800);
	});
	
	function adjustWindow(){
		
		// Init Skrollr
		var s = skrollr.init({
		    forceHeight: false
		});
		
		// Get window size
	    winH = $window.height();
	    
	    // Keep minimum height 550
	    if(winH <= 550) {
			winH = 550;
		} 
	    
	    // Resize our slides
	    $slide.height(winH);
	    
	    // Refresh Skrollr after resizing our sections
	    s.refresh($('.homeSlide'));
	    
	}

	$('.topSlider').owlCarousel({
		items: 1, 
		loop: true,
		nav: false,
	  });




	  $('#about-home').owlCarousel({
		stagePadding: 200,
		loop:true,
		margin:10,
		nav:false,
		items:1,
		lazyLoad: true,
		nav:true,
	  responsive:{
			0:{
				items:1,
				stagePadding: 60
			},
			600:{
				items:1,
				stagePadding: 100
			},
			1000:{
				items:1,
				stagePadding: 200
			},
			1200:{
				items:1,
				stagePadding: 250
			},
			1400:{
				items:1,
				stagePadding: 300
			},
			1600:{
				items:1,
				stagePadding: 350
			},
			1800:{
				items:1,
				stagePadding: 400
			}
		}
	})



/* Demo purposes only */
$(".hover").mouseleave(
function () {
	$(this).removeClass("hover");
}
);



$(document).ready(function() {
	var owl = $("#slider-carousel");
	owl.owlCarousel({
	  items: 4,
	  itemsDesktop: [1000, 4],
	  itemsDesktopSmall: [900, 2],
	  itemsTablet: [600, 1],
	  itemsMobile: false,
	  pagination: false
	});
	$(".next").click(function() {
	  owl.trigger('owl.next');
	})
	$(".prev").click(function() {
	  owl.trigger('owl.prev');
	})
  });




		
} )( jQuery );



