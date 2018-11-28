let h1
const statusElement = document.querySelector("#status")
const puzzleElement = document.querySelector('#puzzle')
//const h1 = new Hangman('Car play', 2);
const render = () => {
    statusElement.textContent = h1.statusMessage
    puzzleElement.textContent = h1.puzzle;
}

window.addEventListener('keypress', e => {
  const guess = String.fromCharCode(e.charCode);
  h1.makeGuess(guess);
  render()
});

document.querySelector("#reset").addEventListener('click', (e) => {
    startGame()
})

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    h1 = new Hangman(puzzle, 6)
    render()
}

startGame()
