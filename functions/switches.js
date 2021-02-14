// Switch statement
/*
    switch(expression) {
        case value1:
            statement to be executet wher result of expression
            matches value1
            break;
        case value2:
            ...
            break;
        case value3:
            ...
            break;
        default:
            break;            
    }
*/

const myFruit = "apple";

if (myFruit === "apple") {
    console.log("Awesome");
}
else if (myFruit === "orange") {
    console.log("Awesome orange");
}
else if (myFruit === "pear") {
    console.log("Awesome pear")
}
else {
    console.log("Wow");
}




function fruitLogger(fruit) {
switch(fruit) {
    case "apple":
        console.log("apple");
        break;
    case "orange":
        console.log("orange");
        break;
    case "banana":
        console.log("banana");
        break;
    default:
        console.log("Default");
        break;            
}
console.log("Broke out switch");
}

function numChecker(num) {
    let value;
    switch(num) {
        case 0:
        case 1:
        case 2:
            value = "low range";   
            break; 
        case 3:
        case 4:
        case 5:
            value = "mid range";
            break;
        case 6:
        case 7:
        case 8:
            value = "high range";
            break;
        default:
            value = "input between 0-8"
            console.log(value)
            return  
    }
    console.log("This value is " + value)        
}

numChecker("das")


const donutPicker = (flav) => {
    switch(flav) {
        case 's':
            return "sprinkles";
        case 'c':
            return "chocolate";
        case 'b':
            return "bear claw";
        default:
            return "Did not understand";            
    }
}    
const donuts = (selection) => {
    const selectedDonut = donutPicker(selection);
    if (!selectedDonut) {
        console.log("incorrect selection");
    }else {
        console.log("ypu have selected" + " " + selectedDonut)
    } 
}

donuts("s");
donuts("c");
donuts("b");
donuts(122121);

const myFruit1 = "banana"
fruitLogger(myFruit1)