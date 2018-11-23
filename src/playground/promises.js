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
const getDataPromise = num => new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof num === 'number' ? resolve(num * 2) : reject('There was some kind fo error handled in promise')
    }, 3000)
  })
/*
const myPromise = getDataPromise(456)

myPromise.then(
  data => {
    console.log(data)
  },
  e => {
    console.log(e)
  }
)
*/
getDataPromise(2).then(data => {
  return getDataPromise(data)
}).then(data => {
  return getDataPromise(data)
}).then(data => {
  console.log(data)
}).catch((err) => {
  console.log(`Error: ${err}`)
})
