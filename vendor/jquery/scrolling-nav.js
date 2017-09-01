//jQuery to collapse the navbar on scroll


//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll,a.nav-link#about,a.nav-link#team,a.nav-link#contact').bind('click', function(event) {
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
			/*$('#about-us').css("margin-top","100px");
			$('#top').css("color","black");
			$('#about').css("color","#b31aff");
			$('#team').css("color","black");
			$('#contact').css("color","black");*/
			
		}
		
		//team block
		else if ($scrollHeight >= $("#about-us").height()+$(".masthead").height()
			&&
			$scrollHeight < $("#team-member").height()+$("#about-us").height()+$(".masthead").height()
		) 
		{
			/*$('#top').css("color","black");
			$('#about').css("color","black");
			$('#team').css("color","#b31aff");
			$('#contact').css("color","black");*/
			
		}
		
		//contact block
		else if ($scrollHeight >= $("#team-member").height()+$("#about-us").height()+$(".masthead").height()
			&&
			$scrollHeight < $("#contact-us").height()+$("#team-member").height()+$("#about-us").height()+$(".masthead").height()
		) 
		{
			/*$('#top').css("color","black");
			$('#about').css("color","black");
			$('#team').css("color","black");
			$('#contact').css("color","#b31aff");*/
			
		}
		
		var $oriCss;
		$(".scrollsidenav").hover(
			function(){
				$oriCss = $(this).css("color");
				//console.log("in $oriCss",$oriCss);
				$(this).css("color", "#b31aff");
			}, 
			function(){
				//console.log("$oriCss after ",$oriCss);
				if($oriCss !== 'rgb(0, 0, 0)'){
					$(this).css("color", "black");
				}
			}
		);
	});
	
	//Click event to scroll to top
	$('a.navbar-brand#top').click(function(){
		$('html, body').animate({scrollTop : 0},600);
		return false;
	});
	
});
