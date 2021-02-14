//Destructuring Arrays and Objects
/*
To destructure arrays we should use correct moves it means we can destruct arrays with different ways also we can use 
functions and loops for destruct arrays etc. we have array with some names: 

//creating array
const arrNames = [ "Bob", "John", "Bill", "Jane" ]

//creating same number variables as we have array elements
var [ a, b, c, d ] = arrNames

//at this moment we have 4 variable each of array elements equals crated variables values

*/
/*
To destructure Objects we should use correct variable names and it should be equals object keys it is require and we also 
have another method if we whant to have different variable names we should reasign variables we can also use default value 
if key doesnot have value or its null default value of variable will be activated etc/

//creating Object
const namesObj = {
    name1: "Bob",
    name2: "John",
    name3: "Bill",
    name4: "Jane"
}
// creating variables inside curly brackets and asigning object 
// important: variable names should be same as object keys or we can use method 2 and reassin variable names 

//method 1
var {name1, name2, name3, name4} = namesObj

//method 2
var {name1: a, name2: b, name3: c, name4: d} = namesObj
*/


var namesObj = {
    name: "John",
    surname: "Doe",
    age: 20,
    sex: "Male",
    address: {
        street: "fake str 100",
        city: "fake city",
        planet: "earth",
    }
}
var namesObj1 = {
    name: "Jane",
    surname: "Doe",
    age: 18,
    sex: "Female",
    address: {
        street: "fake str 404",
        city: "fake city",
        planet: "Mars",
    }
}


function destructure(obj) {
    let {name,
         surname,
         age, 
         sex, 
         address: {street, 
                   city, 
                   planet}} = obj
    let html = 
    `
    <div style="margin: 30px; color: white;">
    <h1> Person identity </h1>
    <h4> name: ${name}</h4>
    <h4> surname: ${surname} </h4>
    <h4> age: ${age} </h4>
    <h4> sex: ${sex} </h4>
    <h1> Addres details </h1>
    <h4> street: ${street} </h4>
    <h4> city: ${city} </h4>
    <h4> planet: ${planet} </h4>
    </div>
    `
    document.write(html)
}  
destructure(namesObj)
destructure(namesObj1)

var infoArr = ["John", "Doe", "Man", 21, "address fake", "80ft", "Businessman"]
var infoArr1 = ["Jane", "Doe", "Woman", 27, "address fake", "60ft", "Businesswoman"]

function destructureObjToArray(arr) {
    let [ name, surname, sex, age, addressat, mass, position ] = arr
    let html = 
    `
    <div style="margin: 30px; color: white;">
    <h1> Person identity </h1>
    <h4> name: ${name}</h4>
    <h4> surname: ${surname} </h4>
    <h4> age: ${age} </h4>
    <h4> sex: ${sex} </h4>
    <h1> Addres details </h1>
    <h4> street: ${addressat} </h4>
    <h4> height: ${mass} </h4>
    <h4> position: ${position} </h4>
    </div>

    `
    document.write(html)
}
destructureObjToArray(infoArr)
destructureObjToArray(infoArr1)