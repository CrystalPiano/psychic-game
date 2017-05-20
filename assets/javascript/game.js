//VARIABLES ===========================

// Tally wins amount.
	var wins = 0;
// Tally losses amount.
	var losses = 0;
// Tally of remaing guess count.
	var guessesLeft = 9;
// The array of possible computer choices.
  var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// The guessed letters
	var guessedLetters = [];

//============

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]
console.log(computerGuess);

var reset = function() {
  totalGuesses = 9;
  guessesLeft = 9;
  guessedLetters = [];
}

document.onkeyup = function(event) {
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  //document.querySelector("#guessLeft").innerHTML = "Guesses Left: " + guessesLeft;

  document.getElementById("#userGuess").innerHTML = "Guesses So Far: " + userGuess;

        if (guessesLeft > 0){
            if (userGuess === computerGuess){
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                alert("You are a mind reader!");
                reset();
            }

        else if(guessesLeft > 0){
        	guessesLeft--;
        	document.querySelector("#guessLeft").innerHTML = "Guesses Left: " + guessesLeft;
        }
      }

        else if(guessesLeft === 0){
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            alert("Better sharpen your skillls!"); 
            reset();
        }  
};