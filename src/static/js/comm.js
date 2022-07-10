$(function () {
    $('.nav').movebg({
        width: 140/*滑块的大小*/,
        extra: 20/*额外反弹的距离*/,
        speed: 300/*滑块移动的速度*/,
        rebound_speed: 400/*滑块反弹的速度*/
    });
})
if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: false,
        live: true
    });
    new WOW().init();
}


$(document).ready(function () {

    $('.servicelist li').hover(
        function toggle () {
            $('.servicelist li').removeClass('hover');
            $(this).addClass('hover')
        }
    );
    $('#productc ul li').hover(
        function toggle () {
            $('#productc ul li').removeClass('active');
            $(this).addClass('active')
        }
    );
})