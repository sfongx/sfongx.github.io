// Bare bones javascript deciding what to render based on screen size

function screenCheck(){
    var screenWidth = screen.width;
    alert(screenWidth);
    if (screenWidth <= 500){
        alert(screenWidth);
        var newLineAreas = document.getElementsByClassName("mobile-nline");
        for (var i = 0; i < newLineAreas.length; i++){
            newLineAreas[i].innerHTML = '<br/><br/><br/>';
        }
    }
}