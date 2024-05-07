'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct number 🥳';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highscore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  console.log(guess, typeof guess);
  console.log(secretNumber, typeof secretNumber);

  //When there is no input.
  if (!guess) {
    displayMessage('No number 😭'); //Refactoring code to be more clear, and easier to use in multiple places.
    // document.querySelector('.message').textContent = 'No number 😭';
  }
  // When player wins the game.
  else if (guess == secretNumber) {
    displayMessage('You guessed the number🥳🥳🥳');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //When guess is wrong.
  else if (guess !== secretNumber) {
    if (score > 1) {
      score = score - 1;
      document.querySelector('.score').textContent = score;
      displayMessage(guess > secretNumber ? 'Too High😒!' : 'Too low😒!');
    } else {
      displayMessage('You lost the game💣💣💣💣');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function reset() {
  score = 20;

  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing ...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
