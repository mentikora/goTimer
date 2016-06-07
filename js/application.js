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
		
		var time = $('#time').val();

		$(this).parent('.player').addClass('active');
		$('.player').css('padding','5%');
		$(this).closest('.step').find('input').addClass('hidden');

		$('.timer_table').append(time);

		$('.player').on('click', function(){
			if ( $(this).hasClass('active') ) {
				$(this).removeClass('active');	
				$(this).siblings('.player').addClass('active');
			} else {}
		});
	});


	// 
	function timer(){
		var time = 0;
		var running = 0;

		/*function startPause(){
			if (running==0) {
				running = 1;
				increment();
			} else {
				running = 0;
			}
		}*/
		/*function reset(){
			running = 0;
			time = 0;
		}*/
		function increment(){
			setTimeout(function(){
				time--;
				var mins = Math.floor(time/10/60);
				var secs = Math.floor(time/10);
				increment();
			}, 100);
		}
	}

});