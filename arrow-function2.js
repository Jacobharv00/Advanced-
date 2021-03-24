// Arguments only exsist in regular functions. can not use arrow function if your going to use argument keyword

const add = function () {
    return arguments[0] + arguments[1]
}

console.log(add(11, 22, 33, 44))

const car = {
    color: 'Red',
    getSummary() {
        return `The car is ${this.color} `
    }
}

console.log(car.getSummary())

Hello