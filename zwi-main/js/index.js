$(function () {
    // fullpage配置代码
    $("#dowebok").fullpage({
        sectionsColor: ["transparent", "skyblue", "purple", "yellow"],
        loopBottom: true,
        verticalCentered: false,
        navigation: false,
        navigationColor: "#ef5c19",
        continuousVertical: true,
        controlArrowColor: "rgba(0, 0, 0, 0.1)",
        anchors: ["page1", "page2", "page3", "page4", "page5"],
        easingcss3: "cubic-bezier(0.175 , 0.3 , 0.320 , 1.5)",
        slidesNavigation: true,
        navigationColor: "#fff",
    });

    // nav部分
    $(".main_left div").mouseover(function () {
        $(this).addClass("current").siblings().removeClass("current");
        var index = $(this).index(); //得到当前li的索引号
        $(".main_right .content").eq(index).stop().slideDown(1200).siblings().stop().slideUp(1200);
    });

    // sec2 点击部分
    $(".sec2_main_head ul li").click(function () {
        $(this).addClass("current1").siblings().removeClass("current1");
        var index = $(this).index(); //得到当前li的索引号
        $(".sec2_main_body>.sec2_main_body_content")
            .eq(index)
            .stop()
            .fadeIn(1200)
            .siblings()
            .stop()
            .fadeOut(1200);
    });
    $('.sec4_input').on('focus', function () {
        // 按回车键也能显示要查看的天气
        window.addEventListener('keydown', function (e) {
            // 兼容性处理
            e = e || window.event;
            if (e.keyCode === 13) {
                document.querySelector('.sec4_button').click();
                $('.sec4_input').blur();
            };
        });
    });
    document.querySelector('.sec4_button').click();
    // 获取html元素封装
    function $s(obj, flag) {
        return flag === true ? document.querySelectorAll(obj) : document.querySelector(obj);
    }
    // 存储页面元素和鼠标样式的数据源
    let arrHover = [
        { ele: document.documentElement, route: 'pointer.ico' },
        { ele: $s(".sec4_button"), route: 'hand.cur' },
        { ele: $s("input[type='text']"), route: 'text.ico' },
        { ele: $s(".fp-prev"), route: 'hand.cur' },
        { ele: $s(".fp-next"), route: 'hand.cur' }
    ];
    for (let i = 0; i < arrHover.length; i++) {
        arrHover[i].ele.onmouseover = function () {
            this.style.cursor = `url(../img/${arrHover[i].route}),auto`;
        };
    };
    for (let i = 0; i < $s('a', true).length; i++) {
        $s('a', true)[i].onmouseover = function () {
            this.style.cursor = `url(../img/hand.cur),auto`;
        };
    };
});
