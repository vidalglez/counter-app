const myFunction = () => {
  const message = 'This is my message'
  const printMessage = () => {
    console.log(message)
  }
  return printMessage
}

const myPrintMessage = myFunction()
myPrintMessage()

const createCounter = () => {
  let count = 0
  return {
    increment() {
      count++
    },

    decrement() {
      count--
    },

    get() {
      return count
    }
  }
}

const counter = createCounter()
counter.increment()
counter.decrement()
counter.decrement()
counter.decrement()

counter.count = 0
console.log(counter.get())

const createTipper = tip => {
  return billAmount => {
    return tip * billAmount
  }
}

const tip10perc = createTipper(0.1)
console.log(tip10perc(150))

const tip15perc = createTipper(0.15)
console.log(tip15perc(150))
