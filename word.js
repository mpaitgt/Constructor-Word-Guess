// constructor Word depends on the Letter constructor. used to create an object representing the current word the user is attempting to guess.

var Word = function() {             
    this.letters = [];              // an array of 'new' letter objects representing the letter of the underlying word
    this.word = wordString();

}

function wordString() {
    // returns a string representing the word
    // calls the function on each letter object
    // the first function defined in letter.js
    // that displays the character or an underscore and concatenate those together
}

function charGuess(c) {
    // takes a character as an argument
    // calls the guess function on each letter object
    // the second function defined in letter.js
}

