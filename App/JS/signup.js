const btnPass = document.querySelectorAll('.btn-pass');
const passShowOrHide = document.querySelectorAll('.img-hide-show');
const inputPassword = document.querySelectorAll('.password');

btnPass.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        showPassword();
    })
});

function showPassword(){
    inputPassword.forEach((pass)=>{
        if(pass.value === ""){
            return
        }else if(pass.type === "password"){
            pass.type = 'text'
        }else{
            pass.type="password"
        }
    })
}


