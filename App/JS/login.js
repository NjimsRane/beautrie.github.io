const btnPass = document.querySelector('.btn-pass');
const passShowOrHide = document.querySelector('.img-hide-show');
const inputPassword = document.querySelector('#password');

btnPass.addEventListener('click',()=>{
    if(inputPassword.value === ''){
        return passShowOrHide;
    }else if(inputPassword.type ==='password'){
        inputPassword.type = 'text';
        passShowOrHide.src = '/Images/pass/hide.png';
    }else{
        inputPassword.type = 'password';
        passShowOrHide.src = '/Images/pass/show.png';
    }
})