
const h1 = new Hangman('Cat', 2)
console.log(h1.getPuzzle())
console.log(h1.status)

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)    
    h1.makeGuess(guess)
    console.log(h1.getPuzzle())
    document.querySelector("#puzzle").textContent = h1.getPuzzle()
    console.log(h1.remainingGuesses)
    document.querySelector("#remainingGuess").textContent = `Remaining guesses ${h1.remainingGuesses}`
    console.log(h1.status)
})

const spanElement = () => {
    const span = document.createElement('span')
    span.textContent = 'Value'//h1.getPuzzle()
    return span
}

document.querySelector("#puzzle").textContent = h1.getPuzzle()
document.querySelector("#remainingGuess").textContent = `Remaining guesses ${h1.remainingGuesses}`