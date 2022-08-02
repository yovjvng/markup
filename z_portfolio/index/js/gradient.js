$(function(){
    $(".container").on("mousemove", function(e){
        let posX = e.pageX;
        let posY = e.pageY;
        $(".cloud1").css({
            "left": 250 - (posX /20),
            "top": 250 - (posY / 20)
        });
    });
})