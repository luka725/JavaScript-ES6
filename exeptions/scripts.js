// Exeption Handling

// Throw your own exeption
/*
    - Use the throw statement to throw own exeption
    - yse specify the expression containing the value to be thrown 
      e.g. : throw expression  
*/


function checkIfNum (n) {
    if (isNaN(n)) {
        throw "this is not a number error"
    }
    else{
        console.log(n)
    }
}

//checkIfNum("hey")
//checkIfNum(2)

function myExption(message) {
    this.message = message
    this.name = "My Exeption"
    this.toStr = function() {
        return this.name + ": " + this.message 
    }
}

//throw new myExption("missing data")

//try...catch

// try {
//     throw "Exeption!"
// }
// catch (e) {
//     console.log(e)
// }

// console.log("I whant to run!")

// let myNum = 20;


function myString(string) {
    if (typeof(string) === "string"){
    this.value  = string;
    this.getValue = function() {
        console.log("Your string: " + this.value + ".")
    }
    }else if (typeof string === "boolean") {
        throw "Error!"
    }
    else{
        throw new stringExceptionError(string)
    }
}
function stringExceptionError(value) {
    this.value = value
    this.message = "Function requires a string"
    this.toString = function() {
        return this.value + ": " + this.message        
    }
}
function verifyString(s) {
    try {
        var str = new myString(s)
    } catch (e) {
        if (e instanceof stringExceptionError) {
            console.log("String exception: " + e)
        }else {
           throw "Unknown error"
        }
    } finally {
        always()
    }
    return str
}
function always(){
    console.log("I always Run : D")
}

// const bool = verifyString(true)
// const a = verifyString("I am an string")
// const b = verifyString(true)
// const c = verifyString(23123123123)
// const d = verifyString("3213123123")
//const a = verifyString("12")


function finallyExample (){ 
    try{
        console.log("HI")
        throw "test"
    }
    catch(e) {
        console.log(e)
        throw "Boo!@"
    }
    finally{
        console.log("Finally Can I run")
        return
    }
}
console.log(finallyExample())