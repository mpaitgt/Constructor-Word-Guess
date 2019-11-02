// Word Constructor

var Letter = require('./letter.js');

var Word = function(word) {             
    this.letter_list = [];

    this.string = function() {  
        var fullWord = ''; 
        for (var i = 0; i < word.length; i++) {   
            var letterObj = new Letter(word[i]);      
            this.letter_list.push(letterObj); 
            fullWord += this.letter_list[i].reveal() + ' ';
        }
        return fullWord;
    };

    this.guess = function(c) {
        for (var i = 0; i < this.letter_list.length; i++) { 
            this.letter_list[i].check(c);               
        }
    }
}

module.exports = Word;