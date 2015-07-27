$(document).ready(function() {

	/**
	* Infinately rotate screenshots from previous conference websites in the 'monster dude' screen on the home page
	**/

	$('.bxslider').bxSlider({
		mode: 'vertical',
		useCSS: false,
		infiniteLoop: true,
		hideControlOnEnd: true,
		easing: 'easeOutElastic',
		speed: 3000,
		auto: true
	});

    /**
    * Rotate Buy Tickets background swirl on hover
    **/

    var interval;
    var degree = 0;

    $('#tickets-button').hover(
    	function() {
	        if(interval) {
	        	clearInterval(interval);
	        }
	        interval = setInterval(function() {
				$('#button-swirl')
					.css('-webkit-transform', 'rotate('+degree+'deg)')
					.css('-moz-transform', 'rotate('+degree+'deg)')
					.css('-ms-transform', 'rotate('+degree+'deg)');
					degree++; degree++; degree++;
			}, 10);
    	},
    	function() {
    		clearInterval(interval);
    	}
    );

    $('#buy--tickets-button').hover(
    	function() {
	        if(interval) {
	        	clearInterval(interval);
	        }
	        interval = setInterval(function() {
				$('#buy--tickets-button-swirl')
					.css('-webkit-transform', 'rotate('+degree+'deg)')
					.css('-moz-transform', 'rotate('+degree+'deg)')
					.css('-ms-transform', 'rotate('+degree+'deg)');
					degree++; degree++; degree++;
			}, 10);
    	},
    	function() {
    		clearInterval(interval);
    	}
    );

});
