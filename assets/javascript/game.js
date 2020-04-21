var reset = function() {
    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var guesses = [];
    var attempts = 9;

    newLetter();
    newOptions();
    newGuesses();
    newAttempts();

    var display = "<p>The Psychic Game</p>" +
    "<p>Guess what letter I'm thinking of</p>" +
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Guesses Left: " + attempts + "</p>" +
    "<p>Your Guesses so far: " + guesses + "</p>";
    
    document.querySelector('#game').innerHTML = display;
};

var newLetter = function() {
    this.mysteryLetter = this.options[Math.floor(Math.random() * this.options.length)];
};

var newOptions = function() {
    this.options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
};

var newGuesses = function() {
    this.guesses = [];
}

var newAttempts = function() {
    this.attempts = 9;
}

    var wins = 0;
    var losses = 0;
    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var guesses = [];
    var attempts = 9;
    var mysteryLetter = null;
    newLetter();
    newOptions();
    newGuesses();
    newAttempts();

    document.onkeyup = function() {
    var userGuess = String.fromCharCode(event.keyCode).
        toLowerCase();

    console.log(userGuess);
    console.log(mysteryLetter);

    if(attempts>1) {
        if(options.includes(userGuess)) {
            for (var i = 0; i < options.length; i++) {
                if(userGuess == mysteryLetter) {
                    wins++;
                    attempts -=10;
                    reset();
                    break;
                }
                else if(userGuess == options[i]) {
                    guesses.push(options[i]);
                    options.splice(i, 1);
                    console.log(options);
                    attempts --;
                }
            }
        }
        else {
            alert("You have already guessed " + userGuess + " please guess another letter");

        }
    }
    else {
        losses ++;
        reset();
    }

    var display = "<p>The Psychic Game</p>" +
    "<p>Guess what letter I'm thinking of</p>" +
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Guesses Left: " + attempts + "</p>" +
    "<p>Your Guesses so far: " + guesses + "</p>";

    document.querySelector('#game').innerHTML = display;
    }