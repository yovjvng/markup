$(function (){
     $(".opt-2").on("click", function(){
        $("body").addClass("is-active");
        $(this).hide();
        $(".opt-1").show();
    });
    $(".opt-1").on("click",function(){
        $("body").removeClass("is-active");
        $(this).hide();
        $(".opt-2").show();
    })

    $("header").each(function(){
        let $window = $(window),
            header = $(this),
            headerTop = header.offset().top;
        $window.on("scroll",function(){
            if ($window.scrollTop() > headerTop) {
                header.addClass("sticky");
            }
            else{
                header.removeClass("sticky");
            }
        });
        $window.trigger("scroll");
    })
})

