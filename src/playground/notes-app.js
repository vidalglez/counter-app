
/*
const p = document.querySelector('p')
console.log(p)
p.remove()
*/

const ps = document.querySelectorAll('p')
ps.forEach(function(p){
    //p.remove()
    console.log(p.textContent)
})

const newParagraph = document.createElement('p')
newParagraph.textContent = 'This is an injected paragraph'
document.querySelector('body').appendChild(newParagraph)