const setDate = document.querySelector(".set-date");
const hamburgerMenu = document.querySelector('.hamburger-menu');
const hero = document.querySelector('.hero');
const menuLinks = document.querySelector('.menu-links');



setDate.innerHTML = new Date().getFullYear();

hamburgerMenu.addEventListener('click',()=>{
    hamburgerMenu.classList.toggle('hamburger-menu-display');
    hero.classList.toggle('hero-blur');
    menuLinks.classList.toggle('menu-links-move')
})