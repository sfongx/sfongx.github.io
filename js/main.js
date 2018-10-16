// Bare bones javascript deciding what to render based on screen size

function screenCheck(){
    var screenWidth = screen.width;

    // Phone screens
    if (screenWidth <= 500) {
        // Newline between second and third entries
        document.getElementById("mobile-nline2").innerHTML = '<br/><br/><br/>';
        var nline1Group = document.getElementsByClassName("mobile-nline1");
        for (var i = 0; i < nline1Group.length; i++){
            nline1Group[i].innerHTML = '<br/><br/><br/>';
        }

    }

    // Tablet screens
    if (screenWidth >= 501 && screenWidth <= 1000) {
        // Only one newline between the second and third entries
        document.getElementById("mobile-nline2").innerHTML = '<br/><br/><br/>';
    }

}