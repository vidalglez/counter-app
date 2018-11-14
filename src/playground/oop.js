'use strict'
const isPublic = 'something'

const Person = function(firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
}

Person.prototype.getBio = function(){
    let bio = `${this.firstName} is ${this.age}!`
    this.likes.forEach( like => {
        bio += ` ${this.firstName} likes ${like}.`
    })    
    return bio
}

Person.prototype.setName = function(fullName){
    const names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
}

const person = new Person('Master', 'Cerati', 51)
const person2 = new Person('Master', 'Bunbury', 52, ['Singing', 'Playing'])

person.setName('David Gilmour')

console.log(person.getBio())
console.log(person2.getBio())


//HANGMAN

const Hangman = function(word, remainingGuesses){
    this.word = word.toLowerCase().split('')
    this.guessedLetters = ['c']
    this.remainingGuesses = remainingGuesses
}

Hangman.prototype.getPuzzle = function(){
    let guessWord = ''
    
    this.word.forEach((letter) => {
        if(this.guessedLetters.includes(letter)){
            guessWord += letter
        } else {
            guessWord += '*'
        }
    })
    return guessWord
}

const h1 = new Hangman('Car', 2)
const h2 = new Hangman('Silao', 3)

console.log(h1.getPuzzle())
console.log(h2.getPuzzle())