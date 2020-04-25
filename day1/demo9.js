function Person(name, address) {
    this.name = name
    this.address = address
}

// add a property to Person prototype
Person.prototype.age = 10

// add a method to the Person prototype
Person.prototype.toString = function() {
    return `[ name: ${this.name}, address: ${this.address} ]`
}

const p1 = new Person('person1', 'pune')
const p2 = new Person('person2', 'mumbai')

// p2 is overriding the toString method
p2.toString = function() {
    return `overriden by p2`
}

console.log(Person.prototype)
console.log(p1)
console.log(p2)

console.log(`p1.age = ${p1.age}`)
console.log(`p2.age = ${p2.age}`)

console.log(p1.__proto__)
console.log(p2.__proto__)
console.log(Person.prototype === p1.__proto__)
console.log(Person.prototype === p2.__proto__)

p1.age = 30

console.log(`p1.age = ${p1.age}`)
console.log(`p2.age = ${p2.age}`)

console.log(p1.toString())
console.log(p2.toString())

console.log(Object.keys(p1))

console.log(Object.keys(p2))
console.log(Object.getOwnPropertyNames(p2))