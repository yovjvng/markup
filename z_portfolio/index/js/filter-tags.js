(function () {
    var $imgs = $('#gallery .modal');
    var $buttons = $('#buttons');
    var tagged = {};
    $imgs.each(function () {
        var img = this;
        var tags = $(this).data('tags'); // data-tags 이름 선언
        if (tags) {
            tags.split(',').forEach(function (tagName) {
                if (tagged[tagName] == null) {
                    tagged[tagName] = [];
                }
                tagged[tagName].push(img);
            });
        }
    });

    $('<button/>', {
        text: 'All',
        class: 'active',
        click: function () {
            $(this)
                .addClass('active') // 선택된 파일 
                .siblings() // 선택된 버튼의 형제 요소
                .removeClass('active');
            $imgs.hide().fadeIn(500); // 이미지 불러올때 효과 슬라이드다운

        }
    }).appendTo($buttons);

    $.each(tagged, function (tagName) {
        $('<button/>', {
            text: tagName,
            click: function () {
                $(this)
                    .addClass('active')
                    .siblings()
                    .removeClass('active');
                $imgs
                    .hide()
                    .filter(tagged[tagName])
                    .fadeIn(500);
            }
        }).appendTo($buttons);
    });

}());