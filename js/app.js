$(function(){
    		
	$('.nav-list li').addClass('contracted');
	
	$(window).resize(function() {
		if( $(window).width()>760 ){
			$('.head-nav, .nav-list li').removeClass('expanded');
			$('.nav-list li').addClass('contracted');
			$('.intro-back').removeClass('push');
		}
	});
	
	$('.menu').click(function(){
		$('.nav-list li').toggleClass('contracted');
		$('.nav-list li, .head-nav').toggleClass('expanded');
		$('.intro-back').toggleClass('push');
	})
	
})