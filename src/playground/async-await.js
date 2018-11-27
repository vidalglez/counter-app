const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided')
    }, 2000)
}) 

const processData = async () => {
    let result = await getDataPromise(2)
    result = await getDataPromise(result)
    return result
    //console.log(`The result is: ${result}`)
}

processData().then((data) => {
    console.log('Data', data)
})