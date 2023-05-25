var sliderWrapper = document.querySelector('.container'),
slideContainer = sliderWrapper.querySelector('.slide-container'),
slides = slideContainer.querySelectorAll('.slide'),
slideCount = slides.length,
currentIndex = 0,
prevBtn = document.getElementById('prev'),
nextBtn = document.getElementById('next');

//슬라이드가 있으면 가로로 배열하기 

console.log(slides);
for (var i = 0; i < slideCount; i++) {
slides[i].style.left = 100 * i + '%';
}

//슬라이드이동함수

function moveSlide(idx) {
slideContainer.style.left = -100 * idx + '%';
currentIndex = idx;
updateNav();
}

nextBtn.addEventListener('click', function (e) {
e.preventDefault();
moveSlide(currentIndex + 1);
});

prevBtn.addEventListener('click', function (e) {
e.preventDefault();
moveSlide(currentIndex - 1);
})

function updateNav() {
if (currentIndex == 0) {
    prevBtn.classList.add('disabled');
}
else {
    prevBtn.classList.remove('disabled');

}
if (currentIndex == slideCount - 1) {
    nextBtn.classList.add('disabled');
}
else {
    nextBtn.classList.remove('disabled')
}
}

updateNav();