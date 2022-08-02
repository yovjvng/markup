 $(document).ready(function() {
            var ht = $(window).height();
            $(".media-bg").height(ht);
            $(window).on("resize", function() {
                var ht = $(window).height();
                $(".media-bg").height(ht);
            });
 })