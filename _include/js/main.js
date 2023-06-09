jQuery(function($){

var BRUSHED = window.BRUSHED || {};

/* ==================================================
   Mobile Navigation
================================================== */
var mobileMenuClone = $('#menu').clone().attr('id', 'navigation-mobile');

BRUSHED.mobileNav = function(){
	var windowWidth = $(window).width();
	
	if( windowWidth <= 979 ) {
		if( $('#mobile-nav').length > 0 ) {
			mobileMenuClone.insertAfter('#menu');
			$('#navigation-mobile #menu-nav').attr('id', 'menu-nav-mobile');
		}
	} else {
		$('#navigation-mobile').css('display', 'none');
		if ($('#mobile-nav').hasClass('open')) {
			$('#mobile-nav').removeClass('open');	
		}
	}
}

BRUSHED.listenerMenu = function(){
	$('#mobile-nav').on('click', function(e){
		$(this).toggleClass('open');
		
		if ($('#mobile-nav').hasClass('open')) {
			$('#navigation-mobile').slideDown(500, 'easeOutExpo');
		} else {
			$('#navigation-mobile').slideUp(500, 'easeOutExpo');
		}
		e.preventDefault();
	});
	
	$('#menu-nav-mobile a').on('click', function(){
		$('#mobile-nav').removeClass('open');
		$('#navigation-mobile').slideUp(350, 'easeOutExpo');
	});
}


/* ==================================================
   Slider Options
================================================== */
BRUSHED.slider = function(){
	$.supersized({
		// Functionality
		slideshow             		:	1,			// Slideshow on/off
		autoplay					:	1,			// Slideshow starts playing automatically
		start_slide             		:	1,			// Start slide (0 is random)
		stop_loop					:	0,			// Pauses slideshow on last slide
		random						: 	0,			// Randomize slide order (Ignores start slide)
		slide_interval         		:   6000,		// Length between transitions
		transition              		:   1, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
		transition_speed			:	900,		// Speed of transition
		new_window				:	1,			// Image links open in new window/tab
		pause_hover          	:   0,			// Pause slideshow on hover
		keyboard_nav        		:   0,			// Keyboard navigation on/off
		performance				:	1,			// 0-Normal, 1-Hybrid speed/quality, 2-Optimizes image quality, 3-Optimizes transition speed // (Only works for Firefox/IE, not Webkit)
		image_protect			:	1,			// Disables image dragging and right click with Javascript
												   
		// Size & Position						   
		min_width		        	:   0,			// Min width allowed (in pixels)
		min_height		    	:   0,			// Min height allowed (in pixels)
		vertical_center        	:   1,			// Vertically center background
		horizontal_center    	:   1,			// Horizontally center background
		fit_always					:	0,			// Image will never exceed browser width or height (Ignores min. dimensions)
		fit_portrait         		:   1,			// Portrait images will not exceed browser height
		fit_landscape				:   0,			// Landscape images will not exceed browser width
												   
		// Components	
		slide_links						:	'blank',	// Individual links for each slide (Options: false, 'num', 'name', 'blank')
		thumb_links					:	0,			// Individual thumb links for each slide
		thumbnail_navigation    	:   0,			// Thumbnail navigation
		slides 					:  	[	// Slideshow Images
											{image : '_include/img/slider-images/image01.jpg', title : '', thumb : '', url : ''},
											{image : '_include/img/slider-images/image04.jpg', title : '', thumb : '', url : ''},
											{image : '_include/img/slider-images/image05.jpg', title : '', thumb : '', url : ''},
											{image : '_include/img/slider-images/image06.jpg', title : '', thumb : '', url : ''}	
										],

		// Theme Options			   
		progress_bar			:	0,			// Timer for each slide							
		mouse_scrub			:	0
		
	});

}


/* ==================================================
   Navigation Fix
================================================== */

BRUSHED.nav = function(){
//	$('.sticky-nav').waypoint('sticky');
}

/* ==================================================
   Quicksand Options
================================================== */
jQuery(document).ready(function() {
    $clientsHolder = $('#portfolio-listings');
    $clientsClone = $clientsHolder.clone(); 
 
    $('.filter-portfolio a').click(function(e) {
        e.preventDefault();
        $filterClass = $(this).attr('class');
 
        $('.filter-portfolio a').attr('id', '');
        $(this).attr('id', 'active-imgs');
 
        if($filterClass == 'all'){
            $filters = $clientsClone.find('li');
        }
        else {
            $filters = $clientsClone.find('li[data-type~='+ $filterClass +']');
        }
 
        $clientsHolder.quicksand($filters, {duration: 600}, function() {
            $("a[rel^='prettyPhoto']").prettyPhoto({social_tools: false, deeplinking: false, overlay_gallery: false, theme: 'dark_square'});
        });
    });
});


/* ==================================================
   Prettyphoto Options
================================================== */
jQuery(document).ready(function() {
    $("a[rel^='prettyPhoto']").prettyPhoto({social_tools: false, deeplinking: false, overlay_gallery: false, theme: 'dark_square'});
});





/* ==================================================
   Contact Form
================================================== */
/*
BRUSHED.contactForm = function(){
	$("#contact-submit").on('click',function() {
		$contact_form = $('#contact-form');
		
		var fields = $contact_form.serialize();
		
		$.ajax({
			type: "POST",
			url: "_include/php/contact.php",
			data: fields,
			dataType: 'json',
			success: function(response) {
				
				if(response.status){
					$('#contact-form input').val('');
					$('#contact-form textarea').val('');
				}
				
				$('#response').empty().html(response.html);
			}
		});
		return false;
	});
}
*/

/* ==================================================
   Menu Highlight
================================================== */

BRUSHED.menu = function(){
	$('#menu-nav, #menu-nav-mobile').onePageNav({
		currentClass: 'current',
    	changeHash: false,
    	scrollSpeed: 750,
    	scrollOffset: 30,
    	scrollThreshold: 0.5,
		easing: 'easeOutExpo',
		filter: ':not(.external)'
	});
}

/* ==================================================
   Next Section
================================================== */

BRUSHED.goSection = function(){
	$('#nextsection').on('click', function(){
		$target = $($(this).attr('href')).offset().top-30;
		
		$('body, html').animate({scrollTop : $target}, 750, 'easeOutExpo');
		return false;
	});
}

/* ==================================================
   GoUp
================================================== */

BRUSHED.goUp = function(){
	$('#goUp').on('click', function(){
		$target = $($(this).attr('href')).offset().top-30;
		
		$('body, html').animate({scrollTop : $target}, 750, 'easeOutExpo');
		return false;
	});
}


/* ==================================================
	Scroll to Top
================================================== */
/*
BRUSHED.scrollToTop = function(){
	var windowWidth = $(window).width(),
		didScroll = false;

	var $arrow = $('#back-to-top');

	$arrow.click(function(e) {
		$('body,html').animate({ scrollTop: "0" }, 750, 'easeOutExpo' );
		e.preventDefault();
	})

	$(window).scroll(function() {
		didScroll = true;
	});

	setInterval(function() {
		if( didScroll ) {
			didScroll = false;

			if( $(window).scrollTop() > 1000 ) {
				$arrow.css('display', 'block');
			} else {
				$arrow.css('display', 'none');
			}
		}
	}, 250);
}
*/
/* ==================================================
   Thumbs / Social Effects
================================================== */

BRUSHED.utils = function(){
	
	$('.item-thumbs').bind('touchstart', function(){
		$(".active").removeClass("active");
      	$(this).addClass('active');
    });
	
	$('.image-wrap').bind('touchstart', function(){
		$(".active").removeClass("active");
      	$(this).addClass('active');
    });
	
	$('#social ul li').bind('touchstart', function(){
		$(".active").removeClass("active");
      	$(this).addClass('active');
    });
	
}

/* ==================================================
   Accordion
================================================== */
/*
BRUSHED.accordion = function(){
	var accordion_trigger = $('.accordion-heading.accordionize');
	
	accordion_trigger.delegate('.accordion-toggle','click', function(event){
		if($(this).hasClass('active')){
			$(this).removeClass('active');
		   	$(this).addClass('inactive');
		}
		else{
		  	accordion_trigger.find('.active').addClass('inactive');          
		  	accordion_trigger.find('.active').removeClass('active');   
		  	$(this).removeClass('inactive');
		  	$(this).addClass('active');
	 	}
		event.preventDefault();
	});
}
*/

/* ==================================================
   Toggle
================================================== */
/*
BRUSHED.toggle = function(){
	var accordion_trigger_toggle = $('.accordion-heading.togglize');
	
	accordion_trigger_toggle.delegate('.accordion-toggle','click', function(event){
		if($(this).hasClass('active')){
			$(this).removeClass('active');
		   	$(this).addClass('inactive');
		}
		else{
		  	$(this).removeClass('inactive');
		  	$(this).addClass('active');
	 	}
		event.preventDefault();
	});
}
*/
/* ==================================================
   Tooltip
================================================== */
/*
BRUSHED.toolTip = function(){ 
    $('a[data-toggle=tooltip]').tooltip();
}
*/

/* ==================================================
   Map
================================================== */
//Google Map Skin - Get more at http://snazzymaps.com/
//function init_map() {
//	var var_location = new google.maps.LatLng(1.288984, 103.812185);
//	var var_mapoptions = {
//		zoom: 17,
//		center: var_location,
//		mapTypeId: google.maps.MapTypeId.ROADMAP,
//		styles: [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}]
//	};
//
//	var var_marker = new google.maps.Marker({
//		position: var_location,
//		map: var_map,
//		title:"Right Click Studio"});
//
//	var var_map = new google.maps.Map(document.getElementById("map"), var_mapoptions);
//	var_marker.setMap(var_map);	
//}


/* ==================================================
	Init
================================================== */

BRUSHED.slider();
//google.maps.event.addDomListener(window, 'load', init_map);

$(document).ready(function(){
	/*
	Modernizr.load([
	{
		
		test: Modernizr.placeholder,
		nope: '_include/js/placeholder.js', 
		complete : function() {
				if (!Modernizr.placeholder) {
						Placeholders.init({
						live: true,
						hideOnFocus: false,
						className: "yourClass",
						textColor: "#999"
						});    
				}
		}
	}
	]);
	*/
	
	
	// Preload the page with jPreLoader
	//console.log('withtouch');
	$('body').jpreLoader({
		splashID: "#jSplash",
		showSplash: true,
		showPercentage: true,
		autoClose: true,
		splashFunction: function() {
			$('#circle').delay(250).animate({'opacity' : 1}, 500, 'linear');
		}
	});

	
	//BRUSHED.nav();
	BRUSHED.mobileNav();
	BRUSHED.listenerMenu();
	BRUSHED.menu();
	//BRUSHED.goSection();
	BRUSHED.goUp();
	//BRUSHED.filter();
	//BRUSHED.contactForm();
    //BRUSHED.scrollToTop();
	//BRUSHED.utils();
	//BRUSHED.accordion();
	//BRUSHED.toggle();
	//BRUSHED.toolTip();
});

$(window).resize(function(){
	BRUSHED.mobileNav();
});

});
