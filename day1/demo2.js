// number to string

const num = 100
console.log(`num = ${num}, type = ${typeof num}`)

const strNum = String(num)
console.log(`strNum = ${strNum}, type = ${typeof strNum}`)


// string to number

const strNum2 = '10230'
console.log(`strNum2 = ${strNum2}, type = ${typeof strNum2}`)

const num2 = Number(strNum2)
console.log(`num2 = ${num2}, type = ${typeof num2}`)

const strNum3 = '1234tdf'
console.log(`strNum3 = ${strNum3}, type = ${typeof strNum3}`)

const num3 = Number(strNum3)
console.log(`num3 = ${num3}, type = ${typeof num3}`)

const strNum4 = '30.50'
const num4 = parseInt(strNum4)
console.log(`num4 = ${num4}, type = ${typeof num4}`)

const num5 = parseFloat(strNum4)
console.log(`num5 = ${num5}, type = ${typeof num5}`)


const v1 = 20, v2 = '20'
console.log(`v1 == v2 => ${v1 == v2}`)
console.log(`v1 === v2 => ${v1 === v2}`)