//VARIABLES ===========================

// Tally wins amount.
	var wins = 0;
// Tally losses amount.
	var losses = 0;
// Tally of possible guesses.
	var guesses = 9;
// Tally of remaing guess count.
	var guessesLeft = 9;
// The array of possible computer choices.
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// The guessed letters
	var guessedLetters = [];
// 
	var letterToGuess = null;

//FUNCTIONS ===========================


//Lets the computer select a random letter from the array
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]
console.log(computerGuess);

//User gets 9 guesses
var updateguessesLeft = function() {
  
  // Here we are grabbing the HTML element and setting it equal to the guessesLeft. (i.e. guessesLeft will get displayed in HTML)
 // document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
};

var updateLetterToGuess = function() {
  this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};
var updateGuessesSoFar = function() {
  // Here we take the guesses the user has tried -- then display it as letters separated by commas. 
  document.querySelector('#let').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};
// Function will be called when we reset everything
var reset = function() {
  totalGuesses = 9;
  //guessLeft = 9;
  guessedLetters = [];

  //updateLetterToGuess();
  //updateGuessesLeft();
  //updateGuessesSoFar();
}

//updateLetterToGuess();
//updateGuessesLeft();


//Users guess function
document.onkeyup = function(event) {
    //guessLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  //guessedLetters.push(userGuess);
 //updateGuessesLeft();
 //updateGuessesSoFar();


 		// Indicatres a win, loss, guess count and reset.
        if (guessesLeft > 0){
            if (userGuess === letterToGuess){
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                alert("You are a mind reader!");
                reset();
            }
        else if(guessesLeft > 0){
        	guessesLeft--;
        	document.querySelector("#guessLeft").innerHTML = "Guesses Left: " + guessLeft;

        }

        }else if(guessesLeft === 0){
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            alert("Better sharpen your skillls!"); 
            reset();
        }
};