const email = document.querySelector('input[type=email]')
const pwd = document.querySelector('input[type=password]')
const email_error = document.querySelector('.email_error')
const pwd_error = document.querySelector('.pwd_error')

console.log(email, pwd, email_error, pwd_error);

email.addEventListener('focus', function(){
  email_error.style.display = 'block'
});
pwd.addEventListener('focus', function(){
  pwd_error.style.display = 'block'
});

document.getElementById('login_btn').onclick = function() {
  let input_email = email.value;
  let input_pwd = pwd.value;
  if(input_email == "dhzlehzl01@naver.com" && input_pwd == "1234"){
    window.location.href ='main_page.html';
  }else {
    alert('로그인 실패');
  }
};