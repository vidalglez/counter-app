const getPuzzle = wordCount =>
  new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', e => {
      if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText)
        resolve(data.puzzle)
      } else if (e.target.readyState === 4) {
        reject('An error has ocurred')
      }
    })

    request.open('GET', `https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    request.send()
  })

const getCountry = countryCode => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()
    request.addEventListener('readystatechange', e => {
      if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText)
        const country = data.find(
          countryItem => countryItem.alpha2Code === countryCode
        )
        resolve(country)
      } else if (e.target.readyState === 4) {
        reject('There was an error trying to retrieve country info')
      }
    })

    request.open('GET', `https://restcountries.eu/rest/v2/all`)
    request.send()
  })
}

getPuzzle(2).then(data => {
    console.log(`The word is ${data}`)
}, (err) => {
    console.log(err)
})