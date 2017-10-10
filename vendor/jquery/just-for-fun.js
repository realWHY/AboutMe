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

$(function(){
	var wrampcount=$('.wrapmcount').size();
	console.log("wrampcount=",wrampcount);
	var heightEach= {};
	for(i=0;i<wrampcount;i++){
		 console.log("i=",i);
		 var slideHeight = 152; // px
		 strWramp = '#wrapm'+i;
		 strReadMore = '.read-more'+i;
		 console.log("strWramp=",strWramp);
		 $(strWramp).css('overflow' , 'hidden');
		 $(strReadMore).css('text-align' , 'center');
		 var defHeight = $(strWramp).height();
		 heightEach[strWramp] = defHeight;
		 console.log("heightEach=",heightEach);
		 console.log("defHeight=",defHeight);
		 if(defHeight >= slideHeight){
		  $(strWramp).css('height' , slideHeight + 'px');
		  $(strReadMore).append('<a href="#">read more &dArr;</a>');
		  console.log(strReadMore+' '+'a');
		  console.log('this = ',$(this));
		  $(strReadMore+' '+'a').click(function(){
		   readMoreNowValid = $(this).parent().attr("class");
		   wrampNowValid = $(this).parent().prev().attr("id");
		   var curHeight = $('#'+wrampNowValid).height();
		   //console.log("wrampNowValid", wrampNowValid);
		   //console.log("defHeight", heightEach['#'+wrampNowValid]);
		   if(curHeight == slideHeight){
			$('#'+wrampNowValid).animate({
			 height: heightEach['#'+wrampNowValid]
			}, "normal");
			$('.'+readMoreNowValid+' '+'a').html('hide &uArr;');
		   }else{
			console.log("wrampNowValid hide", wrampNowValid);
			$('#'+wrampNowValid).animate({
			 height: slideHeight
			}, "normal");
			$('.'+readMoreNowValid+' '+'a').html('read more &dArr;');
		   }
		   return false;
		  });  
		 }
	}
});