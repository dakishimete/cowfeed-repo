const burger = document.querySelector('.burger');
const menu = document.querySelector('.header-menu');
const buyBtn = document.querySelector('.header__buy-btn');
if(burger) {
    burger.addEventListener('click', function(e) {
        burger.classList.toggle('burger--active'); //change burger icon
        menu.classList.toggle('burger--active'); //open burger menu
        buyBtn.classList.toggle('burger--active'); //open burger menu
        document.body.classList.toggle('locked'); //lock page from scroling when burger in opened
    });
}