

//VARIABLES ===========================

// We start the game with a score of 0.
    var score = 0;
// Tally wins amount.
	var wins = 0;
// Tally losses amount.
	var losses = 0;
// Tally remaining guesses.
	var remainingGuesses = 9;
// Tally guesses taken so far.
	var  guessesTaken = 0;
// The array of potential guesses a user can take.
	var userGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// The array of possible computer choices.
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// The computers guess

//FUNCTIONS ===========================

// When the user presses a key, it will run the following function...
      document.onkeyup = function(event) {

// Determine which key was pressed
        var userGuess = event.key;

// Sets the computerGuess variable equal to a random choice from the computerChoice array.
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// User guess filter.
       if (userGuess.indexof(event.key) === -1) {}
       	else {

// This logic determines the outcome of the game (win/loss/tie), and increments the appropriate counter.
		if (userGuess === computerGuess) {
            wins++; 
        }
        else if (userGuess !== computerGuess) {
            losses++;
        }

		  // Here we create the HTML that will be injected into our div and displayed on the page.
          var html = "<p>Press r, p or s to start playing!</p>" +
          "<p>wins: " + wins + "</p>" +
          "<p>losses: " + losses + "</p>";

          // Injecting the HTML we just created into our div and updating the game information on our page.
         // document.querySelector("#game").innerHTML = html;

          }
    };