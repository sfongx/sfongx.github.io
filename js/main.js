// Bare bones javascript deciding what to render based on screen size

function screenCheck(){
    var screenWidth = screen.width;
    if (screenWidth <= 500){
        var newLineAreas = document.getElementsByClassName("mobile-nline");
        for (var i = 0; i < newLineAreas.length; i++){
            newLineAreas[i].innerHTML = '<br/><br/><br/>';
        }
    }
}