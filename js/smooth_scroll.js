$(function(){
    // スムーススクロール
    $('a').click(function(){
        var speed = 700;
        var href= $(this).attr("href");
        if (href.indexOf("#") != -1) {
            var url_sp = href.split("#");
            if ((url_sp[0].indexOf("") != -1) || (url_sp[0].indexOf(location.host) != -1)) {
                var hash   = '#' + url_sp[url_sp.length - 1];
                var target = $(hash == "#" || hash == "" ? 'html' : hash);
                var position = target.offset().top;
                $("html, body").animate({scrollTop:position}, speed, "swing");
                return false;
            }
        }
    });
});
