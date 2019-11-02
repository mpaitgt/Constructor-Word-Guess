// Letter Constructor

var Letter = function(ltr) {
    this.char = ltr;
    this.guessed = false;

    this.reveal = function() {
        if (this.char === ' ') {
            return ' ';
        } else if (this.guessed) {
            return this.char;
        } else {
            return '_';
        }
    }
    
    this.check = function(c) {
        if (c === this.char) {
            this.guessed = true;
        }
    }
}

module.exports = Letter;