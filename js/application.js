$('document').ready(function(){
	
	$('.rotate').on('click', function(){
		$(this).toggleClass('vertical');
	});

	$('.next').on('click', function(){
		$('html,body').animate({
	        scrollTop: $(this).closest('.step').next().offset().top
	    }, 1000);
	});

	$('.prev').on('click', function(){
		$('html,body').animate({
	        scrollTop: $(this).closest('.step').prev().offset().top
	    }, 1000);
	});

	$('.start').on('click', function(event){
		event.stopPropagation();
		
		$(this).parent('.player').addClass('active');
		$('.player').css('padding','5%');
		$(this).closest('.step').find('input').addClass('hidden');

		$('.player').on('click', function(){
			$(this).removeClass('active');	
			$(this).siblings('.player').addClass('active');
		});
	});

});