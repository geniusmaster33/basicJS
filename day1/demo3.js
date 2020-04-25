// array is collection of objects

const numbers = [10, 20, 30, 40, 50]
console.log(`numbers = ${numbers}, type = ${typeof numbers}`)

numbers.push(60)
console.log(`numbers = ${numbers}, type = ${typeof numbers}`)

// traditional for loop
for (let index = 2; index < numbers.length; index++) {
    console.log(`number at ${index} = ${numbers[index]}`)
}

console.log("-----")

const countries = ["india", "usa", "uk", "japan"]
console.log(`countries = ${countries}, type = ${typeof countries}`)

// for..in
// for (let value in countries) {
//     console.log(`value = ${value}`)
// }

// for..of
for (let value of countries) {
    console.log(`value = ${value}`)
}

console.log("-----")

const mixedArray = [10, 20, "india", true, "false", 30.50]
console.log(`mixedArray = ${mixedArray}, type = ${typeof mixedArray}`)

for (let value of mixedArray) {
    console.log(`value = ${value}, type = ${typeof value}`)
}