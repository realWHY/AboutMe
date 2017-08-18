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
	
	var $scrollHeight;
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		$scrollHeight = $(this).scrollTop()
		if ( $scrollHeight >= $(".masthead").height()) {
			$('.scrollsidenav').fadeIn();
		} else {
			$('.scrollsidenav').fadeOut();
		}
		
		
		//about block
		if ($scrollHeight >= $(".masthead").height()
			&&
			$scrollHeight < $("#about-us").height()+$(".masthead").height()
		) 
		{
			$('#top').css("color","red");
			$('#about').css("color","black");
			$('#team').css("color","red");
			$('#contact').css("color","red");
			
		}
		
		//team block
		if ($scrollHeight >= $("#about-us").height()+$(".masthead").height()
			&&
			$scrollHeight < $("#team-member").height()+$("#about-us").height()+$(".masthead").height()
		) 
		{
			$('#top').css("color","red");
			$('#about').css("color","red");
			$('#team').css("color","black");
			$('#contact').css("color","red");
			
		}
		
		//contact block
		if ($scrollHeight >= $("#team-member").height()+$("#about-us").height()+$(".masthead").height()
			&&
			$scrollHeight < $("#contact-us").height()+$("#team-member").height()+$("#about-us").height()+$(".masthead").height()
		) 
		{
			$('#top').css("color","red");
			$('#about').css("color","red");
			$('#team').css("color","red");
			$('#contact').css("color","black");
			
		}
		
		var $oriCss;
		$(".scrollsidenav").hover(
			function(){
				$oriCss = $(this).css("color");
				//console.log("in $oriCss",$oriCss);
				$(this).css("color", "black");
			}, 
			function(){
				//console.log("$oriCss after ",$oriCss);
				if($oriCss !== 'rgb(0, 0, 0)'){
					$(this).css("color", "red");
				}
			}
		);
	});
	
	//Click event to scroll to top
	$('a.scrollsidenav#top').click(function(){
		$('html, body').animate({scrollTop : 0},600);
		return false;
	});
	
});
