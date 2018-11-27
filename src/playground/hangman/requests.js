const getPuzzle = async wordCount => {
    const response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if(response.status === 200){
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to fetch puzzle')
    }
}

const getCountry = async countryCode => {
    const response = await fetch('https://restcountries.eu/rest/v2/all')
    if(response.status === 200){
        let countries = await response.json()
        const country = countries.find(itemCountry => itemCountry.alpha2Code === countryCode)
        return country.name
    } else {
        throw new Error('Unable to fetch country info')
    }
}

const getLocation = async () => {
    const response = await fetch('https://ipinfo.io/json?token=1a11bd55cc8f9c')
    if(response.status === 200){
        const location = await response.json()
        return location
    } else {
        throw new Error('Unable to fetch current location')
    }
}

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

const getCurrentCountry = async () => {
    const location = await getLocation()    
    const currentCountry = await getCountry(location.country)    
    return currentCountry
}

getCurrentCountry().then(country => {
    console.log('getCurrentCountry result: ' + country)
}).catch(err => {
    console.log(err)
})

