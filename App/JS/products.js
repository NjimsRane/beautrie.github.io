const products =  [
    {
        img:'/Images/imgs/make-up1.jpg',
        title : 'foundation',
        price : '$7',
    },
    {
        img:'/Images/imgs/make-up2.jpg',
        title : 'Skin smoothener',
        price : '$15',
    },
    {
        img:'/Images/imgs/make-up1.jpg',
        title : 'Deodorant',
        price : '$9',
    },
    {
        img:'/Images/imgs/make-up2.jpg',
        title : 'Lipstick',
        price : '$10',
    },
    {
        img:'/Images/imgs/make-up2.jpg',
        title : 'Make-Up palette',
        price : '$12',
    },
    {
        img:'/Images/imgs/make-up1.jpg',
        title : 'Make-Up palette',
        price : '$12',
    },
];

const boxes = document.querySelector('.boxes');

window.addEventListener("DOMContentLoaded",()=>{
    let displayItem = products.map((item)=>{
       return `<div class="box">
        <img src=${item.img} alt="${item.title}">
        <div class="caracterias">
            <h4 class="title">${item.title}</h4>
            <p class="prices">${item.price}</p>
        </div>
    </div>`
    });
    displayItem = displayItem.join('');
    boxes.innerHTML = displayItem;
})