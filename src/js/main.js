$(function(){
    // Fixed navigation  
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 100) {
            $('#menu').addClass('fixed');
        } else {
            $('#menu').removeClass('fixed');
        }
     });

     // Smooth scroll
     $('ul li a').bind('click',function(event){
        const anchor = $(this);
		$('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top,
		}, 1000);
        event.preventDefault();
	});
});  