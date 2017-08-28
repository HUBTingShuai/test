$(document).ready(function () {
    $('#menu a').mouseover(function () {
        $(this).next().css({
            'opacity': '1',
            'left': '0px'
        });
    });

    $('#menu a').mouseout(function () {
        var i = $(this).parent().className;
        //        console.log(i);
        if (i != 'active') {
            $(this).next().css({
                'opacity': '0',
                'left': '-20px'
            });
        }

    });
    $('.fa-text').hide();
    $('header .fa').unbind('mouseover').bind('mouseover', function () {
        $(this).addClass('fa-inverse');
        //console.log(this.id);
        if (this.id == 'search') {
            $(this).nextAll().stop().animate({
                right: 190,
                opacity: 1,
            }, 200).show();
        } else {
            $(this).nextAll().stop().animate({
                right: 95,
                opacity: 1,
            }, 200).show();
        }
    });

    $('header .fa').unbind('mouseout').bind('mouseout', function () {
        $(this).removeClass('fa-inverse');
        if (this.id == 'search') {

        } else {
            $(this).nextAll().stop().stop().animate({
                right: 80,
                opacity: 0,
                display: 'none'
            }, 200).hide();
        }
    });
    $('#search').click(function () {
        $(this).nextAll().stop().animate({
            right: 180,
            opacity: 0,
            display: 'none'
        }, 200).hide();

    });
    // 首页下半部分
    $('.content-hover').unbind('mouseover').bind('mouseover', function () {
        $(this).children('a').children('.black_lay').show();
        $(this).children('a').children('.sub_img').show();
        $('.sub_img').unbind('mouseover').bind('mouseover', function () {
            $(this).next().css('opacity', '1');
        });
    });
    $('.content-hover').unbind('mouseout').bind('mouseout', function () {
        $(this).children('a').children('.black_lay').hide();
        $(this).children('a').children('.sub_img').hide();
        $('.sub_img').unbind('mouseout').bind('mouseout', function () {
            $(this).next().css('opacity', '0');
        });
    });
    // 购物袋添加数字；
    var indexI = 0;
    $('.bag,.addbag').unbind('click').bind('click', function () {
        indexI++;
        $('.bagIndex').text(function () {
            return indexI;
        });
    });
    // 二级菜单；
    $('.navbar li .level_2').hide();
    $('.navbar li a').click(function () {
        if ($(this).next().css('display') == 'none') {
            $('.navbar ul').each(function () {
                $(this).slideUp();
            });
            $(this).next().slideDown('300');
        } else {
            $(this).next().slideUp('200');
        }

    });
    $('.link_rule').click(function () {
        $('.msg_info').css({
            'top': '187.6px',
        });
        $('.msg_info').show();
    });
    $('.li1').click(function () {
        $('#infoModal').show().css("overflow-y", "auto");
        $('#infoModal #detailContent1').show();
        $('#infoModal #detailContent2').hide();
    });
    $('.li2').click(function () {
        $('#infoModal').show();
        $('#infoModal #detailContent2').show();
        $('#infoModal #detailContent1').hide();
    });

});
