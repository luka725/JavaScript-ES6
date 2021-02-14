

function socrateIsAHuman(nameOf) {

// When name becomes initial priority becomes true
var humans = {
    initial: "",
    priority: false,
    action: output = () =>{
        if (humans.priority === true){
            // return true;
            console.log(humans.initial + " " + "is mortal Human!");
        }; 
    }
};

var sayName = (name) => {
    // Check if name is string 
    if( (typeof name) === "string"){
        humans.initial = name;
        humans.priority = true;
    } else {
        // return false
        console.log("Try To enter the Name of Human...");
    } 
};

sayName(nameOf);
humans.action();

}

socrateIsAHuman("Socrate");
socrateIsAHuman("Doggy");
socrateIsAHuman("Nate");
socrateIsAHuman(5);
socrateIsAHuman(true);




function whatIsTypeOfCake(vannila, cocolate) {

var cakeIs = "" ;

var typeCake = {
    vannila: function (arg1) {
        if(arg1 === true){
            cakeIs = "This is vannilas cake!"
        }
        else{
            cakeIs = "This isn't vannilas cake!"
        }
    },
    chocolate: function (arg2) {
        if(arg2 === true){
            cakeIs = "This is cocolates cake!"
        }
        else{
            cakeIs = "This isn't cocolates cake!"
        }
    },   
    chocolateAndVannila: function (arg3) {
        if ( arg3 === true){
            cakeIs = "This is boot of vannilas and cocolates cake"
        }
        else{
            cakeIs = "This is just a cake with no ingredients"
        }
    }
};
var sayCake = (ar1, ar2) => {
    if (ar1 === true && ar2 === false){
        typeCake.vannila(true);
        console.log(cakeIs);
    } else if (ar1 === false && ar2 === true){
        typeCake.chocolate(true);
        console.log(cakeIs);
    } else if (ar1 === true && ar2 === true){
        typeCake.chocolateAndVannila(true)
        console.log(cakeIs);
    } else {
        typeCake.chocolateAndVannila(false)
        console.log(cakeIs);
    }
}
sayCake(vannila, cocolate)
}

// first param is for vanila second is for chocolate
whatIsTypeOfCake(true, false)
whatIsTypeOfCake(false, true)
whatIsTypeOfCake(true, true)
whatIsTypeOfCake(false, false)
