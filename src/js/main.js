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

	$('#course-1 .course-point').click(function(e){
		e.preventDefault();
		var title = $(this).attr('data-title');
		$('#course-1 .subject').removeClass('active');
		$('#course-1 .subject[data-id="' + title + '"]').addClass('active');
		$('#course-1 .course-point').removeClass('active');
		$(this).addClass('active');
	})

	$('#course-2 .course-point').click(function(e){
		e.preventDefault();
		var title = $(this).attr('data-title');
		$('#course-2 .subject').removeClass('active');
		$('#course-2 .subject[data-id="' + title + '"]').addClass('active');
		$('#course-2 .course-point').removeClass('active');
		$(this).addClass('active');
	})

})(jQuery);