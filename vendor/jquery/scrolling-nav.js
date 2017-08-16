//jQuery to collapse the navbar on scroll


//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll,a.scrollsidenav#about,a.scrollsidenav#team,a.scrollsidenav#contact').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 600, 'easeInOutExpo');
        event.preventDefault();
    });
});

$(function(){
	
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > $(".masthead").height()) {
			$('.scrollsidenav').fadeIn();
		} else {
			$('.scrollsidenav').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('a.scrollsidenav#top').click(function(){
		$('html, body').animate({scrollTop : 0},600);
		return false;
	});
	
});
