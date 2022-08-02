  $(function () {
      $("nav .menu > li").hover(function () {
          $(this).children("div").stop().slideToggle();
      })
      //        모바일사이즈 mobile-nav설정
      //        $(".bar-btn").click(function(){
      //            $(this).toggleClass("active");
      //            $(".mobile-nav-slide").slideToggle();
      //            $(".mobile-nav-slide").toggleClass("slide-left");
      //        })
      $(".bar-btn").click(function () {
          $(this).toggleClass("on");
          $(".bar-slide").stop().slideToggle();
      })
       $(".bar-slide .slide-menu > li").click(function () {
        $(this).children(".slide-sub-menu").stop().slideToggle();
        $(".slide-sub-menu").not($(this).children(".slide-sub-menu")).slideUp();
    })
  })
