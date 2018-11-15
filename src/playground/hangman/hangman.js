'use strict'
//HANGMAN

const Hangman = function(word, remainingGuesses){
    this.word = word.toLowerCase().split('')
    this.guessedLetters = []
    this.remainingGuesses = remainingGuesses
}

Hangman.prototype.getPuzzle = function(){
    let guessWord = ''
    
    this.word.forEach((letter) => {
        if(this.guessedLetters.includes(letter) || letter === ' '){
            guessWord += letter
        } else {
            guessWord += '*'
        }
    })
    return guessWord
}

Hangman.prototype.makeGuess = function(guessChar) {

    const charFound = this.word.find(letter => {
        return letter === guessChar
    })
    
    if(!charFound){
        this.remainingGuesses -= 1
    }else {
        const found = this.guessedLetters.find(letter => {
            return letter === guessChar
        })
        if(!found){
            this.guessedLetters.push(guessChar)
        }
    }    
    return `Remaining guesses ${this.remainingGuesses}`
}

const h1 = new Hangman('Cat', 2)
const h2 = new Hangman('New Jersey', 4)

console.log(h1.makeGuess('c'))
console.log(h1.makeGuess('s'))
console.log(h1.makeGuess('t'))
console.log(h1.getPuzzle())

console.log(h2.makeGuess('w'))
console.log(h2.getPuzzle())