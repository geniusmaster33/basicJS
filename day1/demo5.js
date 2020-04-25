function function1() {
    const person = {

        // properties
        firstName: 'person1',
        address: 'pune',
        age: 30,
    
        // method
        canVote: function() {
            console.log('inside a method')
        }
    }
    console.log(person)
    console.log(`person = ${person}, type = ${typeof person}`)
    
    // calling the method
    person.canVote()
}

// function1()

function function2(firstName, lastName, address) {
    // const person = {
    //     firstName: firstName, 
    //     lastName: lastName, 
    //     address: address
    // }

    const person = {

        // property shorthand
        firstName,
        lastName,
        address,

        // method shorthand
        canVote() {
            console.log('inside a method')
        }

    }

    console.log(person)
    console.log(person.toString())
}

// function2('steve', 'jobs', 'USA')

function function3() {
    const person = {name: 'person1', address: 'pune'}
    console.log(person)

    // adding a property
    person['email'] = 'person1@test.com'
    person.age = 20

    console.log(person)

    // accessing the properties
    console.log(`name: ${person['name']}`)
    console.log(`address: ${person['address']}`)
    console.log(`age: ${person.age}`)
    console.log(`email: ${person.email}`)
}

// function3()

function function4() {
    // object
    const person = {name: 'person1', address: 'pune', age: 40, email: 'person1@test.com'}

    // print all the properties
    console.log(Object.keys(person))

    // print all the properties
    for (let property in person) {
        console.log(`property = ${property}, value = ${person[property]}`)
    }

    console.log(JSON.stringify(person))

    person.firstName = "person1111"
    console.log(`firstname = ${person.firstName}`)

    // num
    // should be avoided
    // person = 20
    // console.log(`person = ${person}, type = ${typeof person}`)

    // person = {name: 'person2'}
    // console.log(`person = ${person}, type = ${typeof person}`)
}

function4()