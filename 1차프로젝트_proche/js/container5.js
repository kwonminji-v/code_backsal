var imgArray=new Array();
imgArray[0]="../img/container5_1.jpeg";
imgArray[1]="../img/container5_2.jpeg";
imgArray[2]="../img/container5_3.jpeg";
imgArray[3]="../img/container5_4.jpeg";
imgArray[4]="../img/container5_5.jpeg";
imgArray[5]="../img/container5_6.jpeg";
imgArray[6]="../img/container5_7.jpeg";

function showImage(){
 var imgNum=Math.round(Math.random()*6);
 var objImg=document.getElementById("introimg");
 objImg.src=imgArray[imgNum];
 setTimeout(showImage,2000);
}