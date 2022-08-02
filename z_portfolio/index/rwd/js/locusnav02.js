  $(function () {
      //        웹사이즈 nav설정
      $("nav .menu02 > li").hover(function () {
          $(this).children("div").stop().slideToggle();
      })
  })
