const hamburgerMenu = document.querySelector('.hamburger-menu');
const hero = document.querySelector('.hero');
const navLinks = document.querySelector('.nav-links');
const setDate = document.querySelector('#set-date');
const linkToTop = document.querySelector('.link-to-top');
const review = document.querySelector(".review");

/***** review info *********/

const userInfo = [
    {
        img :"/Images/imgs/ebony2.jpg",
        name : 'Cynthia Jame',
        msg : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, obcaecati.',
    },

    {
        img :"/Images/imgs/ebony1.jpg",
        name : 'Cynthia Maria',
        msg : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, obcaecati.',
    },
    {
        img :"/Images/imgs/ebony4.jpg",
        name : 'Rose Maria',
        msg : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, obcaecati.',
    },
]

/***** hamburger menu *********/ 
hamburgerMenu.addEventListener('click',()=>{
    hamburgerMenu.classList.toggle('hamburger-menu-show');
    hero.classList.toggle('hero-blur');
    navLinks.classList.toggle('nav-links-show')
})

/***** set date *********/ 
setDate.innerHTML = new Date().getFullYear();

/***** scroll to top chevron *********/ 
window.addEventListener('scroll',function(){
    const scrollHeight = window.scrollY;
    if(scrollHeight > 500){
        linkToTop.classList.add('link-to-top-show');
    }else{
        linkToTop.classList.remove('link-to-top-show')
    }
});
/***** user review *********/

window.addEventListener('DOMContentLoaded',function(){
    let displayReview = userInfo.map((item)=>{
        return ` <div class="box">
        <div class="box-image">
            <img src='${item.img}' alt="profil picture">
        </div>
        <div class="box-text">
            <h6 class="name">${item.name}</h6>
            <p>${item.msg}</p>
        </div>
    </div>`
    });
    displayReview = displayReview.join('');
    review.innerHTML = displayReview;
})







