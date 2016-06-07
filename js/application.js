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

	var currentPlayer;

	$('.start').on('click', function(event){
		event.stopPropagation();
		
		count();

		$(this).parent('.player').addClass('active');
		$('.player').css('padding','5%');
		$(this).closest('.step').find('input').addClass('hidden');

		currentPlayer = $(this).parent('.player').data('player');
		console.log(currentPlayer);

		$('.timer_table').append(time/60);

		$('.player').on('click', function(){
			currentPlayer = $(this).data('nextplayer');
			console.log(currentPlayer);

			if ( $(this).hasClass('active') ) {
				$(this).removeClass('active');	
				$(this).siblings('.player').addClass('active');
			}
		});
	});

	var timers = [600000,600000];
	
	function timeFormat(sec){
		var s = Math.floor(sec % 60000 / 1000);
		var m = Math.floor(sec - sec % 60000 ) / 60000;
		return m.toString() + ':' + s.toString()
	}

	function count(){
		setTimeout(function(){
			time--;
			timers[currentPlayer] -= 100;

			$('.player[data-player='+currentPlayer+'] .timer_table').text(timeFormat(timers[currentPlayer]));

			if ( timers[0] <=0 || timers[1] <=0 ) {
				return;
			}

			count();
		}, 100);
	}

});