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
		
		var time = $('#time').val();
		if ( time.length === 0 ) {
			alert('Enter time');
		} else {
			$(this).parent().addClass('active');
			$('.player').css('padding','5%');
			$(this).closest('.step').find('input').addClass('hidden');
		}
		counter();
	});

	function counter(){
		
	}

	// $('.player').on('click', function(){
	// 	$(this).siblings('.player').addClass('active');
	// 	$(this).removeClass('active');
	// });

});