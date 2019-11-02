// * **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:

//   * Randomly selects a word and uses the `Word` constructor to store it

//   * Prompts the user for each guess and keeps track of the user's remaining guesses

// 3. `Letter.js` *should not* `require` any other files.

// 4. `Word.js` *should only* require `Letter.js`

var Word = require("./word.js");
var inquirer = require('inquirer');
var wordArray = ['parquet courts', 'mitski', 'tame impala'];
var random = Math.floor(Math.random() * wordArray.length);

var currentWord = new Word(wordArray[random]);
var guesses = 10;

function gamePlay() {
    if (guesses > 0) {
        console.log(`\n${currentWord.string()}\n`);
        inquirer.prompt([
            {
                type: 'input',
                message: 'Guess a letter: ',
                name: 'letter'
            }
        ]).then(function(answer) {
            currentWord.guess(answer['letter']);
            console.log(`\n${currentWord.string()}\n`);
            guesses--;
            gamePlay();
        })
    } else {
        console.log(`\nyou lost\n`);
    }
}


gamePlay();



