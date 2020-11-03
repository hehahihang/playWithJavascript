function openPop(){
    var newWin = window.open("/popup.html","","width=400, height=400");
    if(newWin==null){
        alert("팝업이 차단되어 있습니다. 팝업을 차단을 해재하고 다시 진행해주세요.")
    }
}

window.onload = openPop;