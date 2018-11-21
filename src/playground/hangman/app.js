const h1 = new Hangman('Cat', 2);
console.log(h1.puzzle);
document.querySelector("#status").textContent = h1.getMessage()
console.log(h1.status);

window.addEventListener('keypress', e => {
  const guess = String.fromCharCode(e.charCode);
  h1.makeGuess(guess);
  console.log(h1.puzzle);
  document.querySelector('#puzzle').textContent = h1.puzzle;
  console.log(h1.remainingGuesses);  
  document.querySelector("#status").textContent = h1.getMessage()
  console.log(h1.status);
});

const spanElement = () => {
  const span = document.createElement('span');
  span.textContent = 'Value'; //h1.getPuzzle()
  return span;
};

document.querySelector('#puzzle').textContent = h1.puzzle;
