// parameterless
function function1() {
    console.log(`inside function1`)
}

// call
// function1()


// parameterized 
function function2(p1) {
    console.log(`inside function2`)
    console.log(`p1 = ${p1}, type = ${typeof p1}`)
}

// function2(10)
// function2("test")


function add(p1, p2) {
    console.log(`addition = ${p1 + p2}`)
}

// add(10, 20)
add(10, '20')