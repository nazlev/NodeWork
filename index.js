const colors = require('colors')

const [from, to] = process.argv.slice(2).map(item => parseInt(item))
const {green, yellow, red} = colors;
const collection = [green, yellow, red]
let idx = 0

const colorPrint = (num) => {
    console.log(collection[idx](num))
    if(idx === collection.length - 1) {
        idx = 0
    } else {
        idx++
    }
}

if (isNaN(from) || isNaN(to)) { 
    console.error(colors.red('Incorrected numbers!'))
    process.exit(0)
}


const isPrime = (num) => {
    if(num < 2) {
        return false
    }
    let count = 2;
    while(count < num) {
        if (num % count === 0) return false
        count++
    }
    return true
}
 

let flag = false
let count = from
while(count <= to) {
    if(isPrime(count)) {
        colorPrint(count)
        flag = true
    }
    count++
}

if(!flag) {
    console.log(red('No digital diapazone!'))
}