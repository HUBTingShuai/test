$(document).ready(function () {
    //商品图切换
    $('.img').mouseover(function () {
        $(this).children('.sale_icon').hide();
        $(this).children('.bag').show();
        var img = $(this).children('a').children('img').attr('src');
        var newimg = img.replace('_1', '_2');
        $(this).children('a').children('img').attr('src', newimg);
    });
    $('.img').mouseout(function () {
        $(this).children('.sale_icon').show();
        $(this).children('.bag').hide();
        var img = $(this).children('a').children('img').attr('src');
        var newimg = img.replace('_2', '_1');
        $(this).children('a').children('img').attr('src', newimg);
    });

});
