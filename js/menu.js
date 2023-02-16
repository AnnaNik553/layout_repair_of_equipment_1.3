const menuBtn = document.querySelector('.img-button--burger');
const menu = document.querySelector('.site-nav__box');
const closeBtn = document.querySelector('.img-button--burger-close');

menuBtn.addEventListener('click', function() {
    menu.classList.remove('site-nav__box--hidden');
});

closeBtn.addEventListener('click', function() {
    menu.classList.add('site-nav__box--hidden');
});
