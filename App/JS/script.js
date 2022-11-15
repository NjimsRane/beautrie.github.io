const hamburgerMenu = document.querySelector('.hamburger-menu');
const hero = document.querySelector('.hero');
const navLinks = document.querySelector('.nav-links');
const setDate = document.querySelector('#set-date')

const linkToTop = document.querySelector('.link-to-top');
hamburgerMenu.addEventListener('click',()=>{
    hamburgerMenu.classList.toggle('hamburger-menu-show');
    hero.classList.toggle('hero-blur');
    navLinks.classList.toggle('nav-links-show')
})

setDate.innerHTML = new Date().getFullYear();

window.addEventListener('scroll',function(){
    const scrollHeight = window.pageYOffset;

    if(scrollHeight > 500){
        linkToTop.classList.add('link-to-top-show');
    }else{
        linkToTop.classList.remove('link-to-top-show')
    }
})