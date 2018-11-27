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

const getLocation = () => fetch('https://ipinfo.io/json?token=1a11bd55cc8f9c').then(response => {
    if(response.status === 200) {
        return response.json()
    } else {
        throw new Error('Unable to fetch current location')
    }
}).then((data) => {
    return data
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

getCountry('MX').then(country => {
    console.log(`The country name is: ${country}`)
}).catch(err => {
    console.log(err)
})

getLocation().then(location => {
    console.log(`Your location is location ${location.city}, ${location.region}, ${location.country}`)
}).catch((err) => {
    console.log(err)
})

getLocation().then(location => {
    return getCountry(location.country)
}).then( country => {
    console.log(`The country name through chained fetch is: ${country}`)
}).catch(err => console.log(err))