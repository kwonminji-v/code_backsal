$(document).ready(function(){
    $(".content1").hide();
    $(".title1").off("click").on("click", function(){
        $(".content1").slideToggle(600);
    });
    $(".content2").hide();
    $(".title2").off("click").on("click", function(){
        $(".content2").slideToggle(600);
    })
    $(".content3").hide();
$(".title3").off("click").on("click", function(e){
    e.stopPropagation();
    $(".content3").slideToggle(600);
})
});





//slidetoggle함수가 3개의 타이틀에 같이 넣다보니 마지막 title3에 중복클릭이 발생할 수 있는
//문제 해결을 위해 off().on().으로 작성하였지만,
//슬라이드가 열린 채 멈추지 않는 문제 발생 
//문제를 해결하기 위해 e.stopPropagation() 
//상위 엘리먼트의 이벤트가 전파되는 것을 막아서 문제를 해결


