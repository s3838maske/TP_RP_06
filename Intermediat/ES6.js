// let mobileNumber = [4555,65897,488544,48799,78787];

//     // for (let i=0; i<mobileNumber.length; i++){
//     //     mobileNumber[i]= 91+ mobileNumber[i].toString()
//     // }

//     // console.log(mobileNumber)

// const contact = mobileNumber.map((value, index) => {

// console.log("91"+value)
// console.log(index)

// })



// Task

// let skills = ["html", "css", "javascript", "react"];
// let numberArray = [1,2,3,4,5,6,7]



// // Using Map - Capitalize each of an array of names
// skills.map((value, i)=>{
//     skills[i] = value.replace(value.slice(0.,1), value.slice(0,1).toUpperCase())
// })
// console.log( skills)



// //  Take an array of numbers and make them strings
// numberArray.map((value,i)=>{
//     numberArray[i]= value.toString()

// })
// console.log(numberArray)


// // Take and Array and multiple by 3
// console.log( numberArray.map(value => value*3))

let gitId = {
    username : "s3838maske"
}

let resoponse ;
const api = async() =>{
    resoponse = await fetch(`https://api.github.com/users/${gitId.username}`)
    resoponse = await resoponse.json()
    console.log(resoponse)
};

api()