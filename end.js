function openHtml1() {
    location.href = "page2.html";
    localStorage.a = 6;
}

function openHtml2() {
    location.href = "page3.html";
    localStorage.a = 8;
}

function openHtml3() {

    location.href = "page4.html";
    localStorage.a = 10;
}

document.getElementById("poi").innerHTML = localStorage.po + " points";

function replay() {
    location.href = "index.html";
}

function next() {
    if (localStorage.a == 6) {
        localStorage.a = 8;
        location.href = "page3.html";
    } else {
        if (localStorage.a == 8) {
            localStorage.a =10;
            location.href = "page4.html";
        } else {
            alert("You have completed all the steps and you are returned to the main page")
            location.href = "index.html";
        }
    }
}
    
function reload() {
    if (localStorage.a == 6) {
        location.href = "page2.html";
    }
    if (localStorage.a == 8) {
        location.href = "page3.html";
    }
    if (localStorage.a == 10) {
        location.href = "page4.html";
    }
}