$(function(){
    // Fixed navigation  
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 200) {
            $('#menu').addClass('fixed');
        } else {
            $('#menu').removeClass('fixed');
        }
     });

     $('ul li a').bind('click',function(event){
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1000);
        event.preventDefault();
        console.log
	});
 

});  