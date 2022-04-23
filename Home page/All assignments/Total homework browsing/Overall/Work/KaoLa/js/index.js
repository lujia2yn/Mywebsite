window.addEventListener('load', function () {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    var search = document.getElementById('seach');
    search.onclick = function () {
        alert('不能搜索哦🤣！')
    };
    var gwc = this.document.querySelector('.gwc');
    gwc.addEventListener('click', function () {
        alert('还是不能用哦🤪！')
    });
})