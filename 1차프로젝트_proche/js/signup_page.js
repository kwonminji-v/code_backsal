let email_allow = document.querySelector('.email_allow');
let pw_allow = document.querySelector('.pw_allow');
let email_error = document.querySelector('.email_error');
let pw_error = document.querySelector('.pw_error');

let checkbox1 = document.querySelector('.cb1');
let checkbox2 = document.querySelector('.cb2');
let checkbox3 = document.querySelector('.cb3');
let checkbox4 = document.querySelector('.cb4');
let checkbox5 = document.querySelector('.cb5');
let id_check = document.querySelector('.id_check');
let checkbox_error = document.querySelector('.checkbox_error');

let required1 = document.querySelector('#required1');
let required2 = document.querySelector('#required2');

let signup_success = document.querySelector('.signup_success');
let close_btn = document.querySelector('.close_btn');
let bg = document.querySelector('.bg');

const first_name = document.querySelector('#first_name');
const last_name = document.querySelector('#last_name');
const email = document.querySelector('#email');
const pw = document.querySelector('#pw');
const pw2 = document.querySelector('#pw2');

first_name.addEventListener('focus', function(){
  required1.style.display = 'block';
});

last_name.addEventListener('focus', function(){
  required2.style.display = 'block';
});

first_name.addEventListener('blur', function(){
  required1.style.display = 'none';
});

last_name.addEventListener('blur', function(){
  required2.style.display = 'none';
});

pw2.addEventListener('keyup', function(){
  if(pw.value != pw2.value) {
    pw_error.style.display = 'block';
    pw_allow.style.display = 'none';
  }else{
    pw_error.style.display = 'none';
    pw_allow.style.display = 'block';
  }
});

close_btn.addEventListener('click', function(){
  location.href = 'login_page.html';
});

function createID(){
  if(email.value != "" && pw.value != "" && pw2.value != "") {
    if(pw.value != pw2.value){
      pw_error.style.display = 'block';
      pw_allow.style.display = 'none';
    }else {
      pw_allow.style.display = 'block';
      pw_error.style.display = 'none';
    }
  }else{
    alert('회원가입을 할 수 없습니다.')
    email_allow.style.display = 'none';
    email_error.style.display = 'none';ㅏ
    pw_allow.style.display = 'none';
    pw_error.style.display = 'none';
  }
  if(email.value == 'dhzlehzl01@naver.com' && pw.value == pw2.value && checkbox1.checked == true && checkbox2.checked == true && checkbox3.checked == true && checkbox4.checked == true && checkbox5.checked == true && first_name.value != "" && last_name.value != ""){
    signup_success.style.display = 'block';
    bg.style.filter = 'blur(10px)';
  }else {
    alert('이메일 또는 비밀번호를 확인하세요. / 체크사항을 확인하세요.')
    checkbox_error.style.display = 'block';
  }
};

function checkID() {
  if(email.value != "dhzlehzl01@naver.com"){
    email_error.style.display = 'block';
    email_allow.style.display = 'none';
  }else {
    email_allow.style.display = 'block';
    email_error.style.display = 'none';
  }
}