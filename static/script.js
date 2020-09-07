var password =document.getElementById('password');
var email =document.getElementById('email');
console.log('js execute');
var form = document.querySelector('.btn-login');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log("submitedd..");
    email.value='';
    password.value='';

})