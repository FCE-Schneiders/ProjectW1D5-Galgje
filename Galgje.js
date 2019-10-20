let lives = 5;
let conent = '';
let wordsArray = ["apple", "presidential", "weesp", "pillow", "Amsterdam"];
let randomNumber = Math.floor(Math.random() * wordsArray.length);
let randomWord = (wordsArray[randomNumber]).toLowerCase();
let arrayRandomWord = randomWord.split("");
let numberOfCharacters = arrayRandomWord.length;
let wordToGuess = '';
let nieuweArryWord = [];


for (var i = 0; i < arrayRandomWord.length; i++) { nieuweArryWord[i] = " _ "; }




function fillInGuessdWord() {
  for (let index = 0; index < numberOfCharacters; index++) {
    consoleLog(guessedCharacters[index]);

  }
}

function printHtmlCode(classOrId, content) {
  document.querySelector(classOrId).innerHTML = content;

}
function consoleLog(valueToPrint) {
  console.log(valueToPrint);
}

function livesRemaining() {
  printHtmlCode("#totalLives", 'You still have  ' + lives + ' turns left!');

}

function printWordToGuessUit(numberOfCharacters) {
  printHtmlCode('#word', numberOfCharacters);
}

function startGuessGame() {
  livesRemaining();
  consoleLog(randomWord);
  let currentWord = '';
  for (var i = 0; i < arrayRandomWord.length; i++) {
    nieuweArryWord[i] = " _ ";
    currentWord += nieuweArryWord[i];
  }
  printHtmlCode('#allready-guessed', currentWord);
}


function restartGame() {
  location.reload(true);
}


function checkGuess() {
  let guessInputCharacter = document.querySelector('#inputGuess').value;
  if (arrayRandomWord.includes(guessInputCharacter)) {

  } else {
    lives--;
  }

  if (lives > 0 & nieuweArryWord.includes(' _ ')) {

    for (var i = 0; i < arrayRandomWord.length; i++) {
      if (arrayRandomWord[i] === guessInputCharacter) {
        nieuweArryWord[i] = guessInputCharacter;
      } else {

      }

    }

  }
  else if (!nieuweArryWord.includes(' _ ')) {
    alert('u heeft gewonnen');
  }
  else {
    alert('Game over, probeer opnieuw! Druk op OK');
    restartGame();
  }


  let currentWord = '';
  for (var i = 0; i < arrayRandomWord.length; i++) {
    currentWord += nieuweArryWord[i];
  }
  printHtmlCode('#allready-guessed', currentWord)
  livesRemaining();

}


startGuessGame();

