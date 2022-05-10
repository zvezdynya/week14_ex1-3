const name1 = prompt(`Как тебя зовут?`),
name2 = alert(`Привет, ${name1}!`);

const name3 = name1 => name2;


function sum() {
    const a = document.getElementById('first').value;
    const b = document.getElementById('second').value;;
    const result = +a + +b;
    document.getElementById('answer').innerHTML = result; 
}

function sub() {
    const a = document.getElementById('first').value;
    const b = document.getElementById('second').value;
    const result = a - b;
    document.getElementById('answer').innerHTML = result;
}

function multi() {
    const a = document.getElementById('first').value;
    const b = document.getElementById('second').value;
    const result = a * b;
    document.getElementById('answer').innerHTML = result;
}

function divied() {
    const a = document.getElementById('first').value;
    const b = document.getElementById('second').value;
    const result = a / b;
    document.getElementById('answer').innerHTML = result;
}



const f1 = function (sender) {
    sender.classList.toggle("div_1");
}

const f2 = function (bender) {
    bender.classList.toggle("div_2");
}

const f3 = function (fender) {
    fender.classList.toggle("div_3");
}


const butt_prev = document.querySelector('#carusel .carusel_buttons .prev');
const butt_next = document.querySelector('#carusel .carusel_buttons .next');

let images = document.querySelectorAll('#carusel .carusel_items img');
let img = 0;
butt_next.onclick = function() {
    images[img].style.display = 'none';
    img++;
    if(img >= images.length) {
    img = 0;
    }
    images[img].style.display = 'block';
}

butt_prev.onclick = function() {
    images[img].style.display = 'none';
    img = img - 1;
    if(img < 0) {
        img = images.length - 1;
    }
    images[img].style.display = 'block';
}
