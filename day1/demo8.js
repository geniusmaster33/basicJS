function printInfo(person) {
    console.log(`name: ${person.name}`)
    console.log(`address: ${person.address}`)
    console.log('-----')
}

function function1() {
    const person1 = {name: 'person1', address: 'pune'}
    const person2 = {firstName: 'person2', address: 'mumbai'}
    const person3 = {name: 'person3', permanantAddress: 'nashik'}

    printInfo(person1)
    printInfo(person2)
    printInfo(person3)
}

// function1()


// constructor function
function Person(name, address) {
    this.name = name
    this.address = address
}

const person1 = new Person('person1', 'pune')
const person2 = new Person('person2', 'mumbai')
const person3 = new Person('person3', 'nashik')

printInfo(person1)
printInfo(person2)
printInfo(person3)