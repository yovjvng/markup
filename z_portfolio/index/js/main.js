function checkScrollPosition() {
    let navBlock = $('.gnb');
    let scrollPos = $(document).scrollTop();
    navBlock.find('a').each(function () {
        let block = $($(this).attr('href'));
        if ((block.position().top) <= scrollPos + 400 && (block.position().top) + block.outerHeight() > scrollPos) {
            navBlock.find('li').removeClass('active');
            $(this).parent('li').addClass('active');
        } else {
            $(this).parent('li').removeClass('active');
        }
    });
}

$(document).ready(function () {
    let navBlock = $('.gnb');
    navBlock.find('a').on('click', function (e) {
        e.preventDefault();
        $(document).off('scroll');
        let block = $(this).attr('href');
        let blockPosition = $(block).offset().top;
        $('html, body').animate({
            scrollTop: blockPosition - 100
        }, 600, function () {
            checkScrollPosition();
        });
    });
});
$(window).on('scroll', function () {
    checkScrollPosition();
});
