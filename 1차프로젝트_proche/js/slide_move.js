/* slide를 이동시키기 위해 작성에 필요한 각각의 변수들을 선언해준다. */
var slides = document.querySelector('.slides'),
    slide = document.querySelectorAll('.slides li'),
    currentIdx = 0, slideCount = slide.length, slideWidth = 1920,
    prevBtn = document.querySelector('.prev'),
    nextBtn = document.querySelector('.next');
    timer = undefined;

makeclone();           
/* ↓ 실질적으로 삽입된 이미지를 복제하여 앞 뒤로 붙여 사용자가 사진을 넘기며 볼 때, 
자연스레 순환하여 볼 수 있게 하기위한 수식을 작성하기 위한 makeclone(); 함수를 만든다. */

function makeclone() {
/* ↓ for 구문과 복제할 객체들을 (slide=img) 대상인 slides 앞 부분에 추가하는 prepend와
     객체를 대상의 뒷 부분에 추가하여 주는 append를 사용하여 복제를 진행함
     복제를 진행하는 이유는 무한 슬라이드를 위해서이고, 추후 추가되는 요소들에도 한번에 적용이 가능하게 하기 위해 복제를 해서 사용한다.
     cloneNode : 인수가 true 일경우 하위 요소 전체까지 포함하여 복제 */

    for (i = slideCount - 1; i >= 0; i--) {
        var cloneSlide = slide[i].cloneNode(true); 
        cloneSlide.classList.add('clone');
        slides.prepend(cloneSlide);
    }
    for (i = 0; i < slideCount; i++) {
        var cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add('clone');
        slides.appendChild(cloneSlide);   //appendChild : 선택된 대상 하위 요소에 인수에 해당되는 객체 삽입(이동)

    }
    
}

/* ↓ 복제한 li태그들을 감싸고 있는 ul의 총 가로길이를 구하기 위한 함수를 선언
     클론까지 포함하여 총 15개의 li태그를 포함한 가로길이를 구해야합니다. */
updateWidth();    

/* ↓ ul의 태그의 시작을 복제된 클론 첫번째에서 시작하는 것이 아니라, 
     메인 li태그의 제일 첫번째 이미지부터 시작하기 위한 변수를 선언 */
setInitialPos();

setTimeout(function () {
    slides.classList.add('animated');
});

function updateWidth() {
    var currentSlides = document.querySelectorAll('.slides li');
    var newSlideCount = currentSlides.length;

    var newWidth = slideWidth * newSlideCount + 'px';
    console.log(newWidth);
    slides.style.width = newWidth;
}
/* ↓ 메인 li태그들부터 페이지 로딩 시 시작될 수 있게 클론의 위치를 이동시켜주는 수식을 작성 */
function setInitialPos() {
    var initialTranslateValue = -slideWidth* slideCount;
    console.log(initialTranslateValue);
    slides.style.transform = 'translateX(' + initialTranslateValue + 'px)';
}

// ↓ 버튼태그에 click event 함수를 설정하여 next or prev 버튼을 클릭시 인덱스가 이동할 수 있게 작성 
nextBtn.addEventListener('click', function () {
    moveSlide(currentIdx + 1);
})
prevBtn.addEventListener('click', function () {
    moveSlide(currentIdx - 1);
})

/* ↓ 요소의 갯수 마지막에 도달하였을 때, 다시 처음의 화면으로 돌아가는 듯한 복제이미지를 통한 트릭이 사용하기 때문에
currentIdx의 값이 마지막(5)에 도달했을 때, ul의 메인li(복제가 아닌)요소로 이동시켜주고, currentIdx는 초기화 시켜주는 기능을 작성함 */
function moveSlide(num) {
    slides.style.left = - num * slideWidth + 'px';
    currentIdx = num;
    console.log("현재 인덱스 넘버 : " + currentIdx, "슬라이드 카운트 : " + slideCount)

    if (currentIdx == slideCount || currentIdx == -slideCount) {
        setTimeout(function () {
            slides.classList.remove('animated');  // animaited 효과를 일시적으로 제거
            slides.style.left = '0px'; //ul의 메인li로 돌아가게 0px로 설정
            currentIdx = 0;
        }, 500);
        setTimeout(function () {
            slides.classList.add('animated'); // 다시 animaited를 생성하고,
        }, 800);  // 0.8초 뒤에 animated를 설정한다.
    }
}

/*  ↓ 커서를 누르지 않아도 자동으로 슬라이드가 넘어갈 수 있게 설정
      setInterval() 함수는 반복함수로 설정한 시간에 한번씩 currentIdx가 계속 움직일 수 있게 해줌 */
 function autoSlide() {
     if(timer == undefined) {
         timer = setInterval(function(){
             moveSlide(currentIdx + 1);
         }, 5000);
     }
 }
 autoSlide();

 function stopSlide() {
     clearInterval(timer);  //clearInterval로 반복함수를 멈춘 후 , 입력한 event인 mouseenter와 mouseleave로 제어한다.
     timer = undefined;
 }
 slides.addEventListener('mouseenter', function(){
     stopSlide();
 });
 slides.addEventListener('mouseleave' , function() {
     autoSlide();
 });

 let page_btn = document.querySelectorAll('.page_radio')
 let page_btn_box = document.querySelector('.pagination_box')

    for (let i=0; i<slideCount; i++) {
        page_btn[i].addEventListener('click', function() {
            console.log(i)
            slides.style.transform = `translateX(-${i*1920}px)`
        })
        page_btn_box.addEventListener('mouseenter',function() {
            stopSlide();
        })
        page_btn_box.addEventListener('mouseleave',function() {
            autoSlide();
    })
}
pagebtn_move()