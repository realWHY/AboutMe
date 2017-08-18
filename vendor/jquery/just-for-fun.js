$(function(){
  var $teamImage; //team image
  var $oriText   // p element
  var $oriTextContent; //p content
  var $oriTextcss; // team image css
  var $clickState = false; //clickstate
  $('.team-image').unbind('click');
  $('.team-image').click(function(){
	
	if($clickState == false){
		$teamImage = $(this); 
		var $parent = $teamImage.parent();
		$oriText = ($parent).children("p");
		$oriTextContent = ($oriText).text();
		$oriTextcss = ($teamImage).css("box-shadow");
		//console.log($oriTextcss);
		($teamImage).css("box-shadow","0px 0px 0px gray");
		$oriText.html("don't press!!  hurt!!");
	}
	
	$clickState = true; 
  });
  
  $('.team-image').hover(
		null,
		function() {
			//console.log($clickState);
			if($clickState)
			{
				($teamImage).css("box-shadow",$oriTextcss);
				$oriText.html($oriTextContent);
				$clickState = false;
			}
		}
	);
  
});

$(function(){
	var $button = $('i.text-land-buttion');
	var $oriCss = $button.css("color");
	//console.log($oriCss);
	$('.page-scroll').hover(
		function() {
			$(this).find("h4,i").css("color","#000000");
		},
		function() {
			$(this).find("h4,i").css("color",$oriCss);
		}
	);
});