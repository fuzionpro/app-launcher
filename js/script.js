$(document).ready(function(){
  $('.apps').css({height: 396});
  var scroll = false;
  $('.apps').bind('mousewheel', function(e){
        if(e.originalEvent.wheelDelta /120 > 0) {
          
        }
        else{
            if(!scroll){
                $(".second-set").show();
            $('.apps').css({height: 296}).addClass('overflow');
            scroll =true; $(this).scrollTop(e.originalEvent.wheelDelta);
            
          }
        }
    });
  
  
  $('.apps').scroll(function(){
    var pos=$(this).scrollTop();
    if(pos == 0){
      scroll =false;
      $('.apps').css({height: 396}).removeClass('overflow');
       $(".second-set").hide();
    }
  });
  
  $('.apps .more').click(function(){
    $(".second-set").show();
    $(".apps").animate({ scrollTop: $('.apps')[0].scrollHeight}).css({height: 296}).addClass('overflow');
    
  });
  
  $(window).resize(function(){
    console.log($(document).height());
    $('.apps').css({maxHeight: $(window).height()});
  });
  
});