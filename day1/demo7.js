function function1() {
    const person = {
        firstName: 'steve',
        lastName: 'jobs',
        address: 'usa',

        fullname: function() {
            return `${this.firstName} ${this.lastName}`
        }
    }
    
    
    console.log(`full name: ${person.firstName} ${person.lastName}`)
    console.log(`full name: ${person.fullname()}`)
}

// function1()

function function2() {
    const person = {
        firstName: 'steve',
        lastName: 'jobs',
        address: 'usa'
    }
    
    // add getter and setter
    Object.defineProperty(person, 'fullname', {
        get: function() {
            return `${this.firstName} ${this.lastName}`
        },

        set: function(value) {
            // parts[0]: firstname
            // parts[1]: lastname
            const parts = value.split(' ')
            this.firstName = parts[0]
            this.lastName = parts[1]
        }
    })

    console.log(`full name: ${person.firstName} ${person.lastName}`)

    // getter function is called
    console.log(`full name: ${person.fullname}`)

    // setter function is called
    person.fullname = "bill gates"

    console.log(`full name: ${person.firstName} ${person.lastName}`)
    console.log(`full name: ${person.fullname}`)
}

function2()
