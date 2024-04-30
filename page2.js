
let a;
let countCard = 1;
let img = document.getElementsByClassName("card-front");
let x;
let y;
let x_index;
let y_index;
let match = 0;
// let highest= document.getElementById("id");

// alert (highest);
let mone = 0;
let point = 0;
points(point);
let seconds = 0;
setInterval(timer, 1000)





let audio = new Audio("audio/magic-wand-1.wav");
let audio1 = new Audio("audio/Card-flip-sound-effect.mp3");
const cards = document.querySelectorAll('.card');


(function shuffle() {
    cards.forEach(card => {
        let ramdomPos = Math.floor(Math.random() * (localStorage.a * 2));
        card.style.order = ramdomPos;
    });
})();




move();


function flipCard(index) {
    document.getElementsByClassName("card")[index].style.transform = "rotatey(180deg)";
}

function discover(index) {
    audio1.play();
    if (countCard == 1) {
        countCard++;
        flipCard(index);
        x = img[index];
        x_index = index;

    }
    if (countCard == 2 && x_index != index) {
        countCard++;
        flipCard(index);
        y = img[index];
        y_index = index;
        chek();
    }
}

function chek() {
    if (x.src == y.src) {
        setTimeout(delet, 800);
        match++;
        point += 10;
        points(point);
    } else {
        setTimeout(flipimg, 800);
        if (point >= 2) {
            point -= 2;
            points(point);
        }
    }
}

function flipimg() {
    // audio2.play();
    flipback(x_index);
    flipback(y_index);
    countCard = 1;
}

function delet() {
    audio.play();
    x.style.visibility = "hidden";
    y.style.visibility = "hidden";
    countCard = 1;
    mone++;
    if (mone == localStorage.a) {
        location.href = "end2.html"
    }
}

function flipback(index) {
    document.getElementsByClassName("card")[index].style.transform = "none";
    countCard = 1;
}
if (match == 6) {
    var div = document.getElementById("img");
    div.style.backgroundImage = 'TFpu.gif';
}

function move() {
    const element = document.getElementById("myBar");
    let width = 0;
    const id = setInterval(frame, 1000);
    function frame() {
        if (width == 100) {
            // clearInterval(id);
            location.href = "end1.html";
        } else {
            width++;
            element.style.width = width + '%';
        }
    }
}
let po;
function points(num) {
    // alert(num);
    localStorage.po = num;
    document.getElementById("pointss").innerHTML = num;
    //document.getElementById("po").innerText = point;
}

function timer() {
    seconds++;
    if (seconds % 10 == 0) {
        if (point >= 2) {
            point -= 2;
            points(point);
        }


    }
}





