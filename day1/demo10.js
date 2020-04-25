class Person {

    constructor(firstName, lastName, address, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.address = address
        this.age = age
    }

    printInfo() {
        console.log(`firstName: ${this.firstName}`)
        console.log(`lastName: ${this.lastName}`)
        console.log(`address: ${this.address}`)
        console.log(`age: ${this.age}`)
    }

    canVote() {
        console.log(`can vote = ${this.age >= 18}`)
    }

    get fullname() {
        return `${this.firstName} ${this.lastName}`
    }

    set fullname(value) {
        // 
    }

    // fullname() {
    //     return `${this.firstName} ${this.lastName}`
    // }
}

const p1 = new Person('person1', 'person1', 'pune', 30)
// console.log(p1)
p1.printInfo()
p1.canVote() 

// using method
// console.log(`full name: ${p1.fullname()}`)

// using property
console.log(`full name: ${p1.fullname}`)

// setter method will be called
// p1.fullname = 'bill gates'

