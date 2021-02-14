// types 
// number 
/*
console.log(10 * 5);
console.log(Math.PI);
console.log(+"10");
console.log(isNaN(1));

// Strings
// Sequences of Unicode characters

console.log("H");
console.log("Super duper".lenght);
console.log("Chris".charAt(4))
console.log("Hello" + " " + "world" + "!"); 
console.log("i whant to be uppercase!!!".toUpperCase());

// Booleans
var shouldBeTrue = true;
var shouldBeNull = null;

console.log(shouldBeNull);

if (shouldBeNull === true) {
console.log("This var is true");
}
else{
  console.log("This var is not true");
 }

// The following evaluates to true
var hasContent = "sfjajdijk";
var myArray = ["1", "2", "3", "4"];
// Objects
// Collections of name-value pairs
var myObject = new Object();
myObject['1'] = "Luka";
myObject['2'] = "Luk";
myObject['3'] = "Lu";
myObject['4'] = "L";
console.log(myObject);

var myOtherObject = {
  1: "luka",
  2: "luk",
  3: "lu",
  4: "l"
}

myOtherObject['key'] = "Lukas"
console.log(myOtherObject);

var anotherObject = {
  firstName: "Lukas",
  lastName: "Sheklashvili",
  age: 50,
  numbers: {
    mobile: "555-555-5555",
    home: " 123213123",
  },
  address: "123 Fake St.",
}
var donut = {
  type: "coconut",
  glazed: true,
  sweetness: 8,
  hasChocolate: false,
  sayHi: function(){
    console.log("Type: " + this.type);
  },
  showSweetness: function() {
  console.log("Sweetness: " + this.sweetness + "/10");
},
}
var donut2 = {
  type: "sprinkles",
  glazed: true,
  sweetness: 8,
  hasChocolate: false,
  sayHi: function(){
    console.log("Type: " + this.type);
  },
  showSweetness: function() {
  console.log("Sweetness: " + this.sweetness + "/10");
},
}

donut.sayHi();
donut2.sayHi();
donut.showSweetness();

//constructor pattern for creating objects
function donutConsturctor(type, glazed, sweetness, hasChocolate){
  this.type = type;
  this.glazed = glazed;
  this.sweetness = sweetness;
  this.hasCocolate = hasCocolate;
  this.sayType = function () {
    console.log("Type: " + this.type);
  }
  this.showSweetness = function(){
    console.log("Sweetness: " + this.sweetness + "/10");
  };
}
var coconutDonut = new Donut("coconit", false, 8, true);
cosnole.log(coconut)
*/
/*
var myName = "Lukas";
var myLastName = "Sheklashvili";
var myFavNum = 22;
var myArray = [1, 2, 3, 4, 5, "Lukas", "Davit"];
var myObject = {name: "Luka", age: 20,}

console.log(typeof myName)
console.log(myLastName)
console.log(myFavNum)
console.log(myArray)
console.log(typeof myObject)
*/
/*
var myName = "Lukas";

function sayHi() {
  console.log("Hi" + " " + myName)
}

sayHi()
sayHi()
sayHi()
*/
/*
var count = 1;

function increase() {
  count ++;
  console.log(count)
}
increase()
increase()
increase()

var myName = "Luka";


function sayName() {
  var myName = "Lukas";
  console.log(myName);
}

sayName();
console.log(myName);

function sayHi() {
  var shouldSayHi = true;
  var rellySayHi = true;
  if (shouldSayHi === true) {
    let myName = "Luka";
    console.log("Hi" + " " + myName);
  }
}

sayHi()

const myArray = [ 1, 2, 3, 4];
console.log(myArray)
myArray.push(4)
console.log(myArray)


const myObject = {name: "Luka"}
console.log(myObject)
myObject.name = "Lukas";
console.log(myObject)

function sayHi() {
  const myName = "Lukas"
  if (true) {
    const myName = "Luka";
    console.log(myName);
  }
  console.log(myName);
}

sayHi()
*/


// if statement
// tells the code : if true then start this,
// const bankAccountBalance = 124;
// const costOfItem = 123;
// const canSpendMoney = true;

// if ( bankAccountBalance >= costOfItem || canSpendMoney === true && costOfItem < 150){
//   console.log("You can purchase this item!");
// }


