(function ($) {

	'use strict';

	$(document).ready(function() {
		
		// Comments
		
		$('.commentlist li').addClass('card');
		$('.comment-reply-link').addClass('btn btn-secondary');

		// Forms
		
		$('select, input[type=text], input[type=email], input[type=password], textarea').addClass('form-control');
		$('input[type=submit]').addClass('btn btn-primary');

    	// Pagination fix for ellipsis
    	
		$('.pagination .dots').addClass('page-link').parent().addClass('disabled');

		
		$('.background-slider').slick({
			autoplay: true,
			autoplaySpeed: 8000,
			arrows: true,
			infinite: true,
			speed: 500,
			fade: true,
			cssEase: 'linear',
			pauseOnHover: false,
		});

	});

}(jQuery));
