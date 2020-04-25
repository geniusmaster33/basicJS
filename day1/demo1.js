// number
let num = 100
console.log('num = ' + num)
console.log('type of num = ' + typeof(num))

// num = 200
// console.log('num = ' + num)

// number
let salary = 20.50
console.log('salary = ' + salary)
console.log('type of salary = ' + typeof(salary))

let bigInteger = 2342340239434234802424n
console.log('bigInteger = ' + bigInteger)
console.log('type of bigInteger = ' + typeof(bigInteger))


// string
let firstName = 'Steve'
console.log('firstName = ' + firstName)
console.log('type of firstName = ' + typeof(firstName))

// string
let lastName = "Jobs"
console.log('lastName = ' + lastName)
console.log('type of lastName = ' + typeof(lastName))

// string
let address = `
    H-105,
    Pune, 411041
`
console.log('address = ' + address)
console.log('type of address = ' + typeof(address))

// string interpolation
const str = `num = ${num}, salary = ${salary}, firstName = ${firstName}`
console.log(str)

// boolean
const canVote = true
console.log(`canVote = ${canVote} and type = ${typeof canVote}`)

// object (null)
let myvar = null
console.log(`myvar = ${myvar} and type = ${typeof myvar}`)

// undefined
let myvar2
console.log(`myvar2 = ${myvar2} and type = ${typeof myvar2}`)

if (myvar2 == undefined) {
    console.log('Yes, myvar2 is undefined')
} else {
    console.log('No, myvar2 is not undefined')
}

// number
const pi = 3.14
console.log('pi = ' + pi)

// pi = 3.15
// console.log('pi = ' + pi)

num = 'test'
console.log('type of num = ' + typeof(num))

num = true
console.log('type of num = ' + typeof(num))