//Callback
const getDataCallback = callback => {
  setTimeout(() => {
    callback('Some test data', undefined)
    //callback(undefined, 'There was some kind of error')
  }, 3000)
}

getDataCallback((response, error) => {
  if (!error) {
    console.log(response)
  } else {
    console.log(error)
  }
})

//Promise
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Soem test data handled in promise')
    //reject('There was some kind fo error handled in promise')
  }, 3000)
})

myPromise.then(
  data => {
    console.log(data)
  },
  e => {
    console.log(e)
  }
)
