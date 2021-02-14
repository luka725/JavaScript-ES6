// Functions 
/*
    "A function is a JavaScript procedure - a set of statements
    that preforms a task or calculates a value. [...]"
    -mozilla Developer Network
*/    

let myNumber = 100;
let myString = "Hi"

function addTwenty(num) {
    return num + 20;
}
function addHello(string) {
    return "Hello" + string;
}
console.log(addTwenty(myNumber))
console.log(myNumber)


const myName = "Lukas";

const squaredNumber = function(num) { 
    return num * num;
}

const numberAdderr = function(squarer, num2) {
    const squared = squarer(4);
    return squared + num2
}

var sayHi = function(myName) {
    if (!myName) {
        var myName = "Luka"
    }
    console.log("Hi" + " " + myName);
}

const myInfo = { name: "Lukas", age: 20};

function changeAge(myObj) {
    myObj.age = 100;
    return myObj;
}

const numb = numberDoubler(30);
const numbt = numberDoubler(15);
sayHi("Lukas")
console.log(addHello(myString))
console.log(myString)
console.log(myInfo)
console.log(changeAge(myInfo))

function numberDoubler(num) {
    const doubledValue = num * 2;
    return doubledValue;
}
function numberAdder(num1, num2,) {
    return num1 + num2;
}

console.log(numberAdder(numb, numbt))
console.log(numberAdderr(squaredNumber, 10))

const myNumbers = [1, 2, 3, 4, 5]

function addToArray( myArr){
    myArr.push(6);
    return myArr
 }

 console.log(myNumbers)
 console.log(addToArray(myNumbers))