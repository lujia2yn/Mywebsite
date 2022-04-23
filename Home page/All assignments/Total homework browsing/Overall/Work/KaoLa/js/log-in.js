window.addEventListener('load', function () {
    var GuanBi = document.querySelector('.mian-third');
    var first = document.querySelector('.Right-first');
    var second = document.querySelector('.mian-second');
    var flag = true;
    // 隐藏或显示第二块内容
    GuanBi.addEventListener('click', function () {
        if (flag == true) {
            second.style.display = 'block';
            first.style.display = 'none';
            flag = false;
        } else {
            second.style.display = 'none';
            first.style.display = 'block';
            flag = true;
        }
    })
    // 获取文本框内容和按钮
    var btn = document.querySelector('#btn');
    var Aqts = document.querySelector('.Aqts');
    var dl = document.querySelector('#dl');
    var tel = document.querySelector('#tel');
    var Yz = document.querySelector('#Yz');
    // 获取验证码调用的函数
    btn.addEventListener('click', function () {
        Tel(tel.value);
    })
    // 验证手机号和验证码是否正确
    dl.addEventListener('click', function () {
        DengLu(tel.value, Yz.value);
    });
    // 包装函数
    function Tel(arr) {
        if (arr.length == 0) {
            alert('请输入您的手机号')
        } else if (arr[0] != 1 || arr.length != 11) {
            alert('手机号格式不对')
        } else {
            return YanZheng();
        }
    }
    // 包装函数
    function YanZheng() {
        btn.disabled = true;
        var time = 59;
        var times = setInterval(function () {
            if (time == 0) {
                clearInterval(times);
                btn.disabled = false;
                btn.innerHTML = '重新发送';
                time = 59;
            } else {
                btn.innerHTML = time + '秒后重发';
                Aqts.style.display = 'block';
                time--;
            }
        }, 1000);
    }
    // 包装函数
    function DengLu(arr, newarr) {
        if (arr.length == 0) {
            alert('请输入您的手机号！');
        } else if (arr[0] != 1 || arr.length != 11) {
            alert('手机号格式不对！');
        } else if (newarr.length == 0) {
            alert('请您输入验证码！');
        } else {
            alert('本网站还不能用🤪！');
        };
    };
})