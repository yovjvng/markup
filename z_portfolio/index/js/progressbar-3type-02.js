$(function () {
    // line - circle - semicircle

    var bar1 = new ProgressBar.Circle("#circle1", {
        strokeWidth: 4,
        easing: "easeInOut",
        duration: 1400,
        color: "#ec607d",
        trailWidth: 2,
        trailColor: "#ccc",
        step: function (state, circle) {
            circle.setText(Math.round(circle.value() * 100) + "%")
        }
    })
 var bar2 = new ProgressBar.Circle("#circle2", {
        strokeWidth: 4,
        easing: "easeInOut",
        duration: 1400,
        color: "#fab",
        trailWidth: 2,
        trailColor: "#ccc",
        step: function (state, circle) {
            circle.setText(Math.round(circle.value() * 100) + "%")
        }
    })
 var bar3 = new ProgressBar.Circle("#circle3", {
        strokeWidth: 4,
        easing: "easeInOut",
        duration: 1400,
        color: "#ec607d",
        trailWidth: 2,
        trailColor: "#ccc",
        step: function (state, circle) {
            circle.setText(Math.round(circle.value() * 100) + "%")
        }
    })
 var bar4 = new ProgressBar.Circle("#circle4", {
        strokeWidth: 4,
        easing: "easeInOut",
        duration: 1400,
        color: "#fab",
        trailWidth: 2,
        trailColor: "#ccc",
        step: function (state, circle) {
            circle.setText(Math.round(circle.value() * 100) + "%")
        }
    })
 var bar5 = new ProgressBar.Circle("#circle5", {
        strokeWidth: 4,
        easing: "easeInOut",
        duration: 1400,
        color: "#ec607d",
        trailWidth: 2,
        trailColor: "#ccc",
        step: function (state, circle) {
            circle.setText(Math.round(circle.value() * 100) + "%")
        }
    })

   
    $(window).scroll(function () {
        let skillTop = $('#skill').offset().top;
        if ($(window).scrollTop() > skillTop - 600) {
            bar1.animate(0.8)
            bar2.animate(0.9)
            bar3.animate(0.65)
            bar4.animate(0.65)
            bar5.animate(0.65)
        }
    })

})
