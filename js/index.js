$(function () {
    $('input[type="submit"]').click(function () {
        $('.login').addClass('test');
        setTimeout(function () {
            $('.login').addClass('testtwo');
        }, 300);
        setTimeout(function () {
            $('.authent').show().animate({ right: -320 }, {
                easing: 'easeOutQuint',
                duration: 600,
                queue: false
            });
            $('.authent').animate({ opacity: 1 }, {
                duration: 200,
                queue: false
            }).addClass('visible');
        }, 500);
        setTimeout(function () {
            if ($('input[type=password]').val() == '123456') {
                window.location.replace('zwi-main/index.html');
            } else if ($('input[type=password]').val() == 'lujia2xinyu') {
                window.location.replace('Home page/index.html');
            } else {
                $('.authent').show().animate({ right: 90 }, {
                    easing: 'easeOutQuint',
                    duration: 600,
                    queue: false
                });
                $('.authent').animate({ opacity: 0 }, {
                    duration: 200,
                    queue: false
                }).addClass('visible');
                $('.authent').css('display', 'none');
                $('.login').removeClass('testtwo');
                $('.login').removeClass('test');
                $('.login div').fadeOut(123);
                $('.success').fadeIn();
            }
        }, 2500);
    });
    $('input[type=password]').on('keyup', function () {
        $(this).val($(this).val().trim())
    });
    $('.btn').on('click', function () {
        $('.login div').fadeIn(123);
        $('.success').hide();
    })

    // 按回车键也能登录验证
    window.addEventListener('keydown', function (e) {
        // 兼容性处理
        e = e || window.event;
        if (e.keyCode === 13) {
            document.querySelector('input[type="submit"]').click();
        }
    });
    $('input[type="text"],input[type="password"]').focus(function () {
        $(this).prev().animate({ 'opacity': '1' }, 200);
    });
    $('input[type="text"],input[type="password"]').blur(function () {
        $(this).prev().animate({ 'opacity': '.5' }, 200);
    });
    $('input[type="text"],input[type="password"]').keyup(function () {
        if (!$(this).val() == '') {
            $(this).next().animate({
                'opacity': '1',
                'right': '30'
            }, 200);
        } else {
            $(this).next().animate({
                'opacity': '0',
                'right': '20'
            }, 200);
        }
    });
    var open = 0;
    $('.tab').click(function () {
        $(this).fadeOut(200, function () {
            $(this).parent().animate({ 'left': '0' });
        });
    });
    // 封装获取页面元素的方法
    function $s(obj, flag) {
        return flag === true ? document.querySelectorAll(obj) : document.querySelector(obj);
    }
    // 存储dom元素和鼠样式的数据源
    let arrHover = [
        { ele: document.documentElement, route: 'pointer.ico' },
        { ele: $s("input[type='submit']"), route: 'hand.cur' },
        { ele: $s("input[type='password']"), route: 'text.ico' },
        { ele: $s("input[type='text']"), route: 'pointer.ico' },
        { ele: $s("a"), route: 'hand.cur' }
    ];
    for (let i = 0; i < arrHover.length; i++) {
        arrHover[i].ele.onmouseover = function () {
            this.style.cursor = `url(./img/${arrHover[i].route}),auto`;
        };
    };
});