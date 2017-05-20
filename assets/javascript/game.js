//VARIABLES ===========================

// Tally wins amount.
	var wins = 0;
// Tally losses amount.
	var losses = 0;
// Tally of remaing guess count.
	var guessesLeft = 9;
// The array of possible computer choices.
  var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  // Computer Guess
  var computerGuess = "";

//============

//var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]
//console.log(computerGuess);

//function reset() {
 // guessesLeft = 9;
//}

function gamereset() {
  guessesLeft = 9;
  computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]
  console.log(computerGuess);  
  //document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
}

gamereset();

document.onkeyup = function(event) {
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

//document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;

if (guessesLeft > 0){
      if (userGuess === computerGuess){
        wins++;
        document.querySelector('#wins').innerHTML = "Wins: " + wins;
        alert("You are a mind reader!");
        gamereset();
      }

        else {
          guessesLeft--;
          document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
      }
    }

    else {
      losses++;
      document.querySelector('#losses').innerHTML = "Losses: " + losses;
      //document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
      alert("Better sharpen your skills!"); 
      gamereset();
    }  
  
};