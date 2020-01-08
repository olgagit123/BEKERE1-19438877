// scroll header
window.onscroll = function showHeader() {

    var header = document.querySelector('.header');

    if (window.pageYOffset > 50) {
        header.classList.add('header_fixed');
    } else {
        header.classList.remove('header_fixed');
    }
}