class Person {
    constructor(name, address) {
        this.name = name
        this.address = address
    }

    printInfo() {
        console.log(`name: ${this.name}`)
        console.log(`address: ${this.address}`)
        console.log(`-----`)
    }
}

class Student extends Person {

    constructor(name, address, roll) {
        super(name, address)
        this.roll = roll
    }

    printInfo() {
        console.log(`roll: ${this.roll}`)
        super.printInfo()
    }
}

const p1 = new Person('person1', 'pune')
p1.printInfo()

const s1 = new Student('student1', 'mumbai', 1)
s1.printInfo()
