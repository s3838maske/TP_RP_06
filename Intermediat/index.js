
let obj = {a:1 , b:5, c:8}


let copyobj = {...obj} //Spread Operator


// Arrow function and rest parameter ...
const printNumber = (...numbers) => {
    console.log(copyobj)    
    console.log(numbers)
    return
}

printNumber(2,6,5,8,7)

//Object Destructuring
const student = {
    firstname : "shubham",
    age : 21
}

const {firstname , age } = student;

console.log(`first name ${firstname} and age ${age}`)