const hamburgerMenu = document.querySelector('.hamburger-menu');
const hero = document.querySelector('.hero');
const navLinks = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click',()=>{
    hamburgerMenu.classList.toggle('hamburger-menu-show');
    hero.classList.toggle('hero-blur');
    navLinks.classList.toggle('nav-links-show')
})