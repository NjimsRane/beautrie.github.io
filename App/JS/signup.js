const btnPass = document.querySelector('.btn-pass');
const btnSignup = document.querySelector('.btn-signup');
const passShowOrHide = document.querySelector('.img-hide-show');
const inputPassword = document.querySelector('.password');
const verifyPassword = document.querySelector('.verify-password');
const matchPassword = document.querySelector('.match-password');
const underlineMatch = document.querySelector('.underline-match');

btnPass.addEventListener('click',function(){
    if(inputPassword.value === ""){
        return
    }else if(inputPassword.type === "password"){
        inputPassword.type = 'text';
        passShowOrHide.src = '/Images/pass/hide.png';
    }else{
        inputPassword.type="password";
        passShowOrHide.src = '/Images/pass/show.png';
    }
});

btnSignup.addEventListener('click',function(){
    if(verifyPassword.value != inputPassword.value){
        underlineMatch.style.backgroundColor ='red';
        matchPassword.textContent = 'passwords don`t match';
        matchPassword.style.color = 'red';
        verifyPassword.style.color = 'white';
        
    }else{
        underlineMatch.style.backgroundColor = 'green';
        matchPassword.textContent = 'correct passwords';
        matchPassword.style.color = 'green';
        verifyPassword.style.color = 'white';
    }
})









