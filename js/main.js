// Bare bones javascript deciding what to render based on screen size

function screenCheck(){
    var viewportWidth = document.documentElement.clientWidth;
    console.log(viewportWidth);
    // adjustKeyEntries(viewportWidth);
}

// function adjustLineColuns() {

// }

function adjustKeyEntries(viewportWidth) {
    // Newline before every entry
    if (viewportWidth < 605) {
        document.getElementById("responsive-nline1").innerHTML = '<br/><br/><br/><br/>';
        document.getElementById("responsive-nline2").innerHTML = '<br/><br/><br/><br/>';
        document.getElementById("responsive-nline3").innerHTML = '<br/><br/><br/><br/>';
        document.getElementById("responsive-nline4").innerHTML = '<br/><br/><br/><br/>';

    }

    // "SP", "U", and "OSP" all on separate lines
    if (viewportWidth >= 605 && viewportWidth < 680) {
        document.getElementById("responsive-nline1").innerHTML = '';
        document.getElementById("responsive-nline2").innerHTML = '<br/><br/><br/><br/>';
        document.getElementById("responsive-nline3").innerHTML = '<br/><br/><br/><br/>';
        document.getElementById("responsive-nline4").innerHTML = '<br/><br/><br/><br/>';
    }

    // New line to come before the "SP" Icon and the "OSP Icon"
    if (viewportWidth >= 680 && viewportWidth < 1000) {
        document.getElementById("responsive-nline1").innerHTML = '';
        document.getElementById("responsive-nline2").innerHTML = '<br/><br/><br/><br/>';
        document.getElementById("responsive-nline3").innerHTML = '';
        document.getElementById("responsive-nline4").innerHTML = '<br/><br/><br/><br/>';
    }

    // New line to come before the "U" icon
    if (viewportWidth >= 1000 && viewportWidth < 1260) {
        document.getElementById("responsive-nline1").innerHTML = '';
        document.getElementById("responsive-nline2").innerHTML = '';
        document.getElementById("responsive-nline3").innerHTML = '<br/><br/><br/><br/>';
        document.getElementById("responsive-nline4").innerHTML = '';
    }

    // New line to come before the "OSP" icon
    if (viewportWidth >= 1260) {
        document.getElementById("responsive-nline1").innerHTML = '';
        document.getElementById("responsive-nline2").innerHTML = '';
        document.getElementById("responsive-nline3").innerHTML = '';
        document.getElementById("responsive-nline4").innerHTML = '<br/><br/><br/><br/>';
    }
}
