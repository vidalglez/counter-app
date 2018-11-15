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
