'use strict';

let message = document.querySelector('.message');
let guessBox = (document.querySelector('.guess'));
let checkButton = document.querySelector('.check');
let random = Math.round(Math.random()*20);
let reset = document.querySelector('.again');
let scoreCount = 0;
let body = document.querySelector('body');

function randomNumber() {
    return Math.round(Math.random()*20);
}

function main() {
    let random = randomNumber();
    console.log(random);
    checkButton.addEventListener('click', function checkRandom() {
        if(random == +guessBox.value) {
            message.textContent = 'Correct Number!!!';
            body.style.backgroundColor = 'green';
            scoreCount++;
        } else {
            message.textContent = 'Wrong Number!!!';
            body.style.backgroundColor = 'red';   
            scoreCount--;
        }  
    });

    reset.addEventListener('click', function reset() {
        random = randomNumber();
        body.style.backgroundColor = '#222'; 
        console.log(random);
    });
}

main();


// generating Random Number

// checking the numbers

// updating score


