let isBurgerClicked = false;
const burger = document.querySelector('.hamburger');
const burgerMenu =document.querySelector('.logo-and-nav-container nav');

initPage();

function initPage() {    
    burger.addEventListener('click', burgerClick);
    document.body.addEventListener('click', hideBurger);
}

function burgerClick(e) {
    e.stopPropagation();

    burger.classList.toggle('is-active');
    burgerMenu.classList.toggle('shown');

    isBurgerClicked = !isBurgerClicked;
}

function hideBurger(event) {
    if (isBurgerClicked && event.target !== burgerMenu) {
        burgerClick(event);
    }
}