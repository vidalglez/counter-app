const getPuzzle = wordCount => {
    return fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then(response => {
        if(response.status === 200){
            return response.json()
        } else {
            throw new Error('Unable to fetch puzzle')
        }
    }).then(data => {
        return data.puzzle
    })
}

const getCountry = countryCode => {
    return fetch('https://restcountries.eu/rest/v2/all').then(response => {        
        if (response.status === 200){
            return response.json()
        } else {
            throw new Error('Unable to fetch country info')
        }
    }).then(countries => {
        return countries
    }).then(countries => {
        const country = countries.find(countryItem => countryItem.alpha2Code === countryCode)
        return country.name
    })
}

getCountry('MX').then(country => {
    console.log(`The country name is: ${country}`)
}).catch(err => {
    console.log(err)
})

getPuzzle(2).then(puzzle => {
    console.log(puzzle)
}).catch( err => {
    console.log(err)
})

fetch('https://puzzle.mead.io/puzzle', {}).then(response => {
    if(response.status === 200){
        return response.json()
    } else {
        throw new Error('There was an error to retrieve puzzle')
    }
}).then(data => {
    console.log(`The word is: ${data.puzzle}`)
}).catch(err => {
    console.log(err)
})