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

	$('.dir').click(function(e){
		e.preventDefault();
	})
	$('.dir').focus(function(){
		$(this).next().slideToggle(350);
	})
	$('.dir').blur(function(){
		$(this).next().slideToggle(350);		
	})
	$('.sublist li').click(function(){
		$(this).parent().parent().find('a').text($(this).text())
	})

})(jQuery);