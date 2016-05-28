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

	$('.start').on('click', function(){
		$('.player').css('padding','5%').addClass('ingame');
		$(this).closest('.step').find('input').addClass('hidden');
		$(this).closest('.player').addClass('active');
	});

	$('.ingame').on('click', function(){
		$(this).siblings('.ingame').addClass('active');
		$(this).removeClass('active');
	});

});