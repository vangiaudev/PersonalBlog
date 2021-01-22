$(document).ready(function() {
	$(window).scroll(function(event) {
		var pos_body = $('html,body').scrollTop();
        if(pos_body > 3){
            $('.header').addClass('sticky');
            $('.text-menu').addClass('color-text-menu');
            $('.menu-header').removeClass('list-menu');
            $('.un-sticky').removeClass('un-sticky');
            
            
        }
        else {         
            $('.header').removeClass('sticky');
            $('.text-menu').removeClass('color-text-menu');
            $('.menu-header').addClass('list-menu');
            $('.header').addClass('un-sticky');
            $('.header').removeClass('header-scroll');
            
        }
        if(pos_body > 500){
            $('.line-miss').addClass('line-miss-scroll');
        }
    });
    $('.back-to-top').click(function(event){
        $('html,body').animate({scrollTop:0}, 1400);
    });
    $('.js-scroll-about-me').click(function(event){
        $('html,body').animate({scrollTop:650}, 1400);
    });
    $('.js-scroll-contact').click(function(event){
        $('html,body').animate({scrollTop:2500}, 1400);
    });
    $('.hide-js-about-me').click(function(event){
        $('html,body').animate({scrollTop:480}, 1400);
    });
    $('.hide-js-contact').click(function(event){
        $('html,body').animate({scrollTop:3480}, 1400);
    });
});

//Loading effect
$(window).on('load', function(event) {
	$('body').removeClass('pre-loading');
	$('.load').delay(2800).fadeOut('fast');
});