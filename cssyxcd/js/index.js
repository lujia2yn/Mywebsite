; (function () {
    window.addEventListener('load', function () {
        function $(obj, flag) {
            return flag === true ? document.querySelectorAll(obj) : document.querySelector(obj);
        }
        let span = $('.navbar span');
        let flag = true;
        span.addEventListener('click', function (e) {
            // 兼容性处理
            e = e || window.event;
            e.stopPropagation();
            if (flag) {
                this.classList.add('bg');
                $('link', true)[2].setAttribute('href', './css/hover.css');
                flag = false;
            } else {
                this.classList.remove('bg');
                $('link', true)[2].setAttribute('href', '');
                flag = true;
            }
        });
        for (let i = 0; i < $('li', true).length; i++) {
            $('li', true)[i].addEventListener('click', function () {
                $('link', true)[2].setAttribute('href', '');
                span.classList.remove('bg');
                flag = true;
            });
        };
        document.documentElement.addEventListener('click', function () {
            $('link', true)[2].setAttribute('href', '');
            span.classList.remove('bg');
            flag = true;
        });
        let arrHovers = [...$('a', true), span];
        for (let i = 0; i < arrHovers.length; i++) {
            arrHovers[i].onmouseover = function () {
                this.style.cursor = 'url(../img/hand.cur),auto';
            };
        };
        // 存放页面元素的数据源
        let arrObj = [
            { ele: document.documentElement, route: 'pointer.ico' },
            { ele: $('.menu'), route: 'pointer.ico' }
        ];
        // 遍历数据源里的数据
        for (let i = 0; i < arrObj.length; i++) {
            arrObj[i].ele.onmouseover = function () {
                this.style.cursor = `url(../img/${arrObj[i].route}),auto`;
            };
        };
    });
})();