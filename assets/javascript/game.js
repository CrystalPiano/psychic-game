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

//Defines Reset Function
function gamereset() {
  guessesLeft = 9;
  computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  console.log(computerGuess); 
  letterGuessed = ""; //Not sure how to clear this and still display 'Guesses so far: '?
  //document.querySelector("#guessesLeft").innerHTML = "Guesses Left: 9" + guessesLeft;
}

//Runs Reset Function to ensure a clear page state
gamereset();

//=====

//Triggering userGuess as a lowercase character
document.onkeyup = function(event) {
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  console.log(userGuess);

//=====

//Trying to sort out how to collect users input key to list in 'letters guessed area'
var letterGuessed = document.getElementById("letterGuessed");
letterGuessed.textContent = event.key;
//document.querySelector("letterGuessed").innerHTML = "Letters Guessed: " + letterGuessed + ","; // Not sure how to list all seperated by a comma

//=====

//Trying to figure out why reset does not set guessesLeft counter back to 9.
//document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;

//=====

//Game Logic - Defines what constitutes a Win, Loss, and Guess counter reduction.
if (guessesLeft > 1){
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