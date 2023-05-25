
/*  */
window.addEventListener('load', () => {
    const forms = document.getElementsByClassName('validation-form');

    Array.prototype.filter.call(forms, (form) => {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      }, false);
    });
  }, false);


/* 회원가입 창 입력 시 자리에 맞게 입력하면 다음칸으로 이동해주는 자바스크립트 */
  window.onload = () => {
    var phoneNum_1 = document.querySelector('#phonenumber_1'),
        phoneNum_2 = document.querySelector('#phonenumber_2');
        phoneNum_3 = document.querySelector('#phonenumber_3');
    
    phoneNum_1.onkeydown = () => {
      if(3<= phoneNum_1.value.length) {
        phoneNum_2.focus()
      }
    }
    phoneNum_2.onkeydown = () => {
      if(4<= phoneNum_2.value.length) {
        phoneNum_3.focus()
      }
    }}
