var Word = require("./word.js");
var inquirer = require('inquirer');
var wordArray = ['parquet courts', 'mitski', 'tame impala'];
var guesses = 10;
var random = Math.floor(Math.random() * wordArray.length);
var currentWord = new Word(wordArray[random]);

function gamePlay() {
    if (guesses > 0) {
        console.log(`\nGuesses left: ${guesses}\n`);
        console.log(`\n${currentWord.string()}\n`);
        inquirer.prompt([
            {
                type: 'input',
                message: 'Guess a letter: ',
                name: 'letter'
                // validate: oneLetter()
            }
        ]).then(function(answer) {
            currentWord.guess(answer['letter']);
            console.log(`\n${currentWord.string()}\n`);
            guesses--;
            if (isSolved()) {
                console.log(`\nYou win!\n`);
            } else {
                gamePlay();
            }
        })
    } else {
        console.log(`\nyou lost\n`);
        pickWord();
    }
}

function isSolved() {
    var currentArray = currentWord.string().split('');
    for (var i = 0; i < currentArray.length; i++) {

    }
    if (!currentArray.includes('_')) {
        return true;
    } else {
        return false;
    }
}

// function oneLetter() {
    
// }

gamePlay();
