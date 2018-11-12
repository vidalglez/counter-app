const persons = [{
    name: 'Servidor De Nadie',
    age: 22
}, {
    name: 'Master Cerati',
    age: 45
}, {
    name: 'Master Bunbury',
    age: 51
}]

console.log(persons.filter((person) => person.age < 50))


const person = persons.find( person => person.age === 22)

console.log(person)

const add = function() {
    console.log(arguments)
    return arguments[0] + arguments[1]
}

const add2 = () => {
    return arguments[0] + arguments[1]
}

console.log(add(3, 9, 8, 7))

console.log(add2(3, 9, 8, 7))
