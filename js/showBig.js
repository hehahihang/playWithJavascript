var bigPic = document.querySelector("#cup");
var smallPics = document.querySelectorAll(".small");

for(var i=0;i<smallPics.length;i++){
    smallPics[i].addEventListener("click",changePic);
}

function changePic(){
    var newPic = this.src; //click동작이 발생한 src에 해당하는 이미지
    bigPic.setAttribute("src", newPic);
    //cup.src = newPic 이렇게 해도 된다.
}