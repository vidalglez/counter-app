const h1 = new Hangman('Cat', 2);
document.querySelector("#status").textContent = h1.statusMessage

window.addEventListener('keypress', e => {
  const guess = String.fromCharCode(e.charCode);
  h1.makeGuess(guess);
  document.querySelector('#puzzle').textContent = h1.puzzle;
  document.querySelector("#status").textContent = h1.statusMessage
});

const spanElement = () => {
  const span = document.createElement('span');
  span.textContent = 'Value'; //h1.getPuzzle()
  return span;
};

document.querySelector('#puzzle').textContent = h1.puzzle;
