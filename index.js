var Word = require("./word.js");
var inquirer = require('inquirer');
var wordArray = ['parquet courts', 'mitski', 'tame impala', 'sandy alex g', 'built to spill', 'elliott smith'];
var guesses = 20;
var random;
var currentWord;

function gamePlay() {
    if (wordArray.length === 0) {
        console.log(`\nYOU GOT THROUGH THEM ALL! CONGRATULATIONS!`);
    }
    if (guesses > 0 && wordArray.length > 0) {
        console.log(`\nGuesses left: ${guesses}\n`);
        if (guesses === 20) {
            pickWord();
            console.log(`\n${currentWord.string()}\n`);
        }
        inquirer.prompt([
            {
                type: 'input',
                message: 'Guess a letter: ',
                name: 'letter',
                validate: function validateInput(name) {
                    if (name.length > 1) {
                        console.log(`\n\nPlease enter only one value.\n`);
                    } else if (typeof name === 'number') {
                        console.log(`\n\nyou need to enter a letter.\n`);
                    }
                    return name.length === 1
                }
            }
        ]).then(function(answer) {
            currentWord.guess(answer['letter']);
            console.log(`\n${currentWord.string()}\n`);
            guesses--;
            if (isSolved()) {
                console.log(`\nYou win!\n`);
                guesses = 20;
                wordArray.splice(random, 1);
                gamePlay();
            } else {
                gamePlay();
            }
        })
    } else if (guesses === 0) {
        console.log(`\nyou lost\n`);
        guesses = 20;
        wordArray.splice(random, 1);

        if (wordArray.length > 0) {
            pickWord();
            gamePlay();
        } else {
            console.log('YOU COULDN\'T GET THROUGH WITHOUT A LOSS - SORRY');
        }

    }
}

function isSolved() {
    var currentArray = currentWord.string().split('');
    if (!currentArray.includes('_')) {
        return true;
    } else {
        return false;
    }
}

function pickWord() {
    random = Math.floor(Math.random() * wordArray.length);
    currentWord = new Word(wordArray[random]);
}

gamePlay();
