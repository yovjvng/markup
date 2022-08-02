$(document).ready(function () {
//팝업창
    $(".close-btn").click(function () {
        $(".popup").fadeOut();
        $(".blind").fadeOut();
    })
//menu slidetoggle
    $(".nav-btn").click(function () {
        $(this).toggleClass("on");
        $(".menu-box").stop().slideToggle();
    })
    
})
