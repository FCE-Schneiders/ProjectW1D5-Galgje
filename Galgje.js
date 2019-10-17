//invoer veld input werkend maken  link inzetten.
// random woorden waaruit gekozen kan woorden
let wordsArray = ["apple", "soccer", "castle","pillow", "letter"]
let randomNumber =Math.floor( Math.random() * wordsArray.length);
console.log(randomNumber) //om te controleren 
console.log(Math.floor(randomNumber)) 


// je wilt een randomword (op index 0,1,2,3,4) uit de wordsarray halen => randomNumber
// let randomWord = Math.random() * 
//let randomWord = wordsArray[0 of 1 of 2 of 3 of 4] is het zelfde als wordsArray [randomNumber]
let randomWord = wordsArray [randomNumber]
console.log(randomWord) // voor mezelf om te checken

//het random woord opsplitsen in aparte karakters
// gebruik de splitmethod.
let arrayRandomWord = randomWord.split("");
console.log(arrayRandomWord.length) //even voor de check

// functies

function checkGuess(){
    console.log(document.getElementById("myText").value);
}
function restartGame(){
    location.reload();
  }
    
  //onderstaande uitwerken nog.
  let lives //aantal guesses - guess is een herhaling.

function livesRemaining (){
      document.getElementById("totalLives").innerHTML='5' // moderne manier is querySelector even aanpassen 
                                                          //hoe ga ik de variabele (levens) veranderen?

  }


