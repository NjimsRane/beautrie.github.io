const setDate = document.querySelector(".set-date");
const hamburgerMenu = document.querySelector('.hamburger-menu');



setDate.innerHTML = new Date().getFullYear();



hamburgerMenu.addEventListener('click',()=>{
    hamburgerMenu.classList.toggle('hamburger-menu-display')
})