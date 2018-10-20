// Bare bones javascript deciding what to render based on screen size

function screenCheck(){
    var screenWidth = screen.width;

    // Tablet and phone screens screens
    if (screenWidth <= 1000) {
        // Newline between third and fourth entries
        document.getElementById("mobile-nline1").innerHTML = '<br/><br/><br/>';
    }

}