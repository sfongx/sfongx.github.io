// Bare bones javascript deciding what to render based on screen size

function screenCheck(){
    var screenWidth = screen.width;

    // Phone screens
    if (screenWidth <= 500) {
        // Newline between second and third entries
        document.getElementById("mobile-nline1").innerHTML = '<br/><br/><br/>';
    }

    // Tablet screens
    if (screenWidth >= 501 && screenWidth <= 1000) {
        // Newline between third and fourth entries
        document.getElementById("mobile-nline2").innerHTML = '<br/><br/><br/>';
    }

}