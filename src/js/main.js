(function($) {
    
	
	$('.mobile-button').click(function(e){
		e.preventDefault();
		$('header.header .bottom-header nav ul').slideToggle(200);
		$(this).toggleClass('active');
	})

	$('.faq .questions li span').click(function(){
		$(this).next().slideToggle(300);
		$(this).parent().toggleClass('active');
	})

})(jQuery);