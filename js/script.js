$(document).ready(function(){

	  var scroll = false;
	  var launcherMaxHeight = 396;
	  var launcherMinHeight = 296;
	  
	  $('.apps').bind('mousewheel', function(e){
			if(e.originalEvent.wheelDelta /120 > 0) {
			  
			}
			else{
				if(!scroll){
					$(".second-set").show();
					$('.apps').css({height: launcherMinHeight}).addClass('overflow');
					scroll =true; 
					$(this).scrollTop(e.originalEvent.wheelDelta);
				}
			}
		});
	  
	  
	  $('.apps').scroll(function(){
		var pos=$(this).scrollTop();
		if(pos == 0){
			scroll =false;
			$('.apps').css({height: launcherMaxHeight}).removeClass('overflow');
			$(".second-set").hide();
		}
	  });
	  
	  $('.apps .more').click(function(){
		$(".second-set").show();
		$(".apps").animate({ scrollTop: $('.apps')[0].scrollHeight}).css({height: 296}).addClass('overflow');
	  });
	  
	  $(window).resize(function(){
		$('.apps').css({maxHeight: $(window).height()});
	  });
	  
	  $(".button").click(function(){
		$(".app-launcher").toggle();
	  });
  
});