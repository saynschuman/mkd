(function($) {
    
	
	$('.mobile-button').click(function(e){
		e.preventDefault();
		$('header.header .bottom-header nav ul').slideToggle(200);
		$(this).toggleClass('active');
	})

})(jQuery);