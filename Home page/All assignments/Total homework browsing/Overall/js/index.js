window.addEventListener('load', function () {
    var HtmlFrist = this.document.querySelector('.nav-conter-first');
    var htmlFst = this.document.querySelector('.center3');
    var JsFrist = this.document.querySelector('.nav-right-first');
    var JsFst = this.document.querySelector('.js-first');
    HtmlFrist.addEventListener('click', function () {
        htmlFst.style.display = 'block';
        JsFst.style.display = "none";
    });
    JsFrist.addEventListener('click', function () {
        htmlFst.style.display = 'none';
        JsFst.style.display = "block";
    });
})