// * **Letter.js**: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:

var userInput = '';

var Letter = function() {
    this.char = '';                 // A string value to store the underlying character for the letter
    this.guessed = false;           // A boolean value that stores whether that letter has been guessed yet
    this.reveal = revealChar();
    this.check = checkChar();
}

function revealChar() {
    // A function that returns the underlying character if the letter has been guessed
    // or a placeholder (like an underscore) if the letter has not been guessed
    if (userInput === this.char) {
        return userInput;
    } else {
        return '_';
    }
}

function checkChar(c) {
    // A function that takes a character as an argument and checks it against the underlying character
    // updating the stored boolean value to true if it was guessed correctly
    if (c === this.char) {
        this.guessed = true;
    } else {
        this.guessed = false;
    }
}