$(function(){
  $("nav ul li a, .back_to_top a, .footer_top a, a.button").click(function(e){
    // console.log($(this.hash)); //hash 라는건 $("nav ul li a") href의 값을 가져오는것
    // console.log($(this.hash).offset().top) //top꼭대기의 위치, 상대적 거리를 가져오는것
    var thisElem = $(this.hash);
    $("html,body").stop(); //마지막으로 클릭한것만 체킹되도록 안하면 계속왓다갓다거리다가 최종클릭한부분으로 올라옴...그럼넘느려...사용성떨어져.....
    $("html,body").animate({scrollTop : thisElem.offset().top},1500);
    // e.preventDefaute();
    return false;
  });

  /*scroll 상단이동 버튼 노출*/
  $(window).scroll(function(){
    if( $(this).scrollTop() == 0 ){
      $(".back_to_top").removeClass("on");
    }else{
      $(".back_to_top").addClass("on");
    }
  });

  /*section offset top값으로  class 추가*/
  var wHeight = $(window).height() //화면에서 보여지는 최소높이값 즉, 100vh와 같다
  $(window).scroll(function(){
    var thisScrollTop = $(this).scrollTop();
    $("section").each(function(){
      var thisOffset = $(this).offset();
      // console.log("offset top:" + thisOffset.top + ",section scrollTop:" + thisScrollTop);
      if(thisOffset.top <= thisScrollTop + 500 && thisScrollTop <= thisOffset.top + wHeight){ //70을 준다는건 스크롤보다 70먼저 실행된다는뜻
        $(this).addClass("active");
      }
    });
  });

});
