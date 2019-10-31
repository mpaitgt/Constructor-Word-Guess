// * **Letter.js**: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:

var Letter = function() {
    this.char = 'a';                 // A string value to store the underlying character for the letter
    this.guessed = false;           // A boolean value that stores whether that letter has been guessed yet

    this.revealChar = function() {
        // A function that returns the underlying character if the letter has been guessed
        // or a placeholder (like an underscore) if the letter has not been guessed
        if (this.guessed) {
            return this.char;
        } else {
            return '_';
        }
    }
    
    this.checkChar = function(c) {
        // A function that takes a character as an argument and checks it against the underlying character
        // updating the stored boolean value to true if it was guessed correctly
        if (c === this.char) {
            console.log('You guessed right!');
            this.revealChar();
            this.guessed = true;
        } else {
            console.log('Wrong!');
            this.guessed = false;
        }
    }
}

module.exports = Letter;