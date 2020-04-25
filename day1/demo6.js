function function1() {
    const person = { name: 'person1', address: 'pune' }
    console.log(person)
    console.log(Object.getOwnPropertyDescriptor(person, 'name'))
    console.log(Object.getOwnPropertyDescriptor(person, 'address'))

    person.name = "person2"
    console.log(person)
    console.log(Object.keys(person))
    console.log(Object.getOwnPropertyNames(person))
}

// function1()

function function2() {
    const person = { name: 'person1', address: 'pune' }
    console.log(person)
    
    // make the name readonly
    Object.defineProperty(person, 'name', { writable: false })
    Object.defineProperty(person, 'address', { writable: false })

    person.name = 'person2'
    person.address = 'mumbai'
    console.log(person)
}

// function2()


function function3() {
    const person = { name: 'person1', address: 'pune', age: 30 }
    console.log(Object.getOwnPropertyDescriptor(person, 'age'))


    console.log(person)
    console.log(Object.keys(person))
    console.log(Object.getOwnPropertyNames(person))
    console.log(JSON.stringify(person))

    console.log('----')

    // skip from enumration
    Object.defineProperty(person, 'age', {enumerable: false})

    console.log(person)
    console.log(Object.keys(person))
    console.log(Object.getOwnPropertyNames(person))
    console.log(JSON.stringify(person))

    console.log('----')

    Object.defineProperty(person, 'age', {enumerable: true})

    console.log(person)
    console.log(Object.keys(person))
    console.log(Object.getOwnPropertyNames(person))
    console.log(JSON.stringify(person))
}

// function3()

function fucntion4() {
    const person = { name: 'person1', address: 'pune', age: 30 }
    console.log(Object.getOwnPropertyDescriptor(person, 'age'))

    console.log(person)
    console.log(Object.keys(person))
    console.log(Object.getOwnPropertyNames(person))
    console.log(JSON.stringify(person))

    console.log('---')

    Object.defineProperty(person, 'age', {configurable: false})

    // Object.defineProperty(person, 'age', {enumerable: false})

    // console.log(person)
    // console.log(Object.keys(person))
    // console.log(Object.getOwnPropertyNames(person))
    // console.log(JSON.stringify(person))

    person.age = 40
    console.log(person)
}

fucntion4()