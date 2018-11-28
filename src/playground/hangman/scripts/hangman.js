'use strict';
//HANGMAN

class Hangman {
  constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split('');
    this.guessedLetters = [];
    this.remainingGuesses = remainingGuesses;
    this.status = 'playing';
  }

  get puzzle() {
    let puzzle = '';

    this.word.forEach(letter => {
      if (this.guessedLetters.includes(letter) || letter === ' ') {
        puzzle += letter;
      } else {
        puzzle += '*';
      }
    });
    return puzzle;
  }

  makeGuess(guessChar) {
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
    }
  }

  updateStatus() {
    if (this.remainingGuesses === 0) {
      this.status = 'failed';
    } else if (!this.puzzle.includes('*') && this.remainingGuesses > 0) {
      this.status = 'finished';
    } else {
      this.status = 'playing';
    }
  }

  get statusMessage() {
    if (this.status === 'playing') {
      return `Guess left ${this.remainingGuesses}`;
    } else if (this.status === 'failed') {
      return `Nice try! The word was "${this.word.join('')}"`;
    } else if (this.status === 'finished') {
      return `Great work! You guessed the word`;
    }
  }
}
