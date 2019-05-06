function main () {
  const panelsElements = document.querySelector('.wrapper');
  
}

window.onload = main;

var counterRed = 0;
var counterBlue = 0;
var counterGreen = 0;


function countRed(){
    counterRed = counterRed + 1;
    document.querySelector('span.red-counter').innerText = counterRed;
}

function countBlue(){
    counterBlue = counterBlue + 1;
    document.querySelector('span.blue-counter').innerText = counterBlue;
}

function countGreen(){
    counterGreen = counterGreen + 1;
    document.querySelector('span.green-counter').innerText = counterGreen;
}