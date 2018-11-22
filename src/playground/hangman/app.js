const h1 = new Hangman('Car play', 2);
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

const request = new XMLHttpRequest()

request.addEventListener('readystatechange', (e) => {
    if(e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText)
        console.log(data)
    } else if(e.target.readyState === 4){
        console.log('An error has ocurred')
    }
    
})

request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=2')
request.send()