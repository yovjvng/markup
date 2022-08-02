function checkScrollPosition() {
    let navBlock = $('.menu');
    let scrollPos = $(document).scrollTop();
    navBlock.find('a').each(function () {
        let block = $($(this).attr('href'));
        if ((block.position().top) <= scrollPos + 300 && (block.position().top) + block.outerHeight() > scrollPos) {
            navBlock.find('li').removeClass('active');
            $(this).parent('li').addClass('active');
        } else {
            $(this).parent('li').removeClass('active');
        }
    });
}

$(document).ready(function () {
    let navBlock = $('.menu');
    navBlock.find('a').on('click', function (e) {
        e.preventDefault();
        $(document).off('scroll');
        let block = $(this).attr('href');
        let blockPosition = $(block).offset().top;
        $('html, body').animate({
            scrollTop: blockPosition - 200
        }, 600, function () {
            checkScrollPosition();
        });
    });
});
$(window).on('scroll', function () {
    checkScrollPosition();
});