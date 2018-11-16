'use strict';
//HANGMAN

const Hangman = function(word, remainingGuesses) {
  this.word = word.toLowerCase().split('');
  this.guessedLetters = [];
  this.remainingGuesses = remainingGuesses;
  this.status = 'playing';
};

Hangman.prototype.getPuzzle = function() {
  let guessWord = '';

  this.word.forEach(letter => {
    if (this.guessedLetters.includes(letter) || letter === ' ') {
      guessWord += letter;
    } else {
      guessWord += '*';
    }
  });
  return guessWord;
};

Hangman.prototype.makeGuess = function(guessChar) {
  if (this.status === 'playing') {
    const charFound = this.word.find(letter => {
      return letter === guessChar;
    });

    if (!charFound) {
      this.remainingGuesses -= 1;
    } else {
      const found = this.guessedLetters.find(letter => {
        return letter === guessChar;
      });
      if (!found) {
        this.guessedLetters.push(guessChar);
      }
    }
    this.updateStatus();
    //return `Remaining guesses ${this.remainingGuesses}`
  }
};

Hangman.prototype.updateStatus = function() {
  if (this.remainingGuesses === 0) {
    this.status = 'failed';
  } else if (!this.getPuzzle().includes('*') && this.remainingGuesses > 0) {
    this.status = 'finished';
  } else {
    this.status = 'playing';
  }
};

Hangman.prototype.getMessage = function() {
    if(this.status === 'playing'){
        return `Guess left ${this.remainingGuesses}`
    } else if(this.status === 'failed'){
        return `Nice try! The word was ${this.word.join('')}`
    } else if(this.status === 'finished'){
        return `Great work! You guessed the word`
    }
}