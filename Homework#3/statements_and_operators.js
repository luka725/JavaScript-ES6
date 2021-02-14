var mens = {
    humans: [],
}

var mortals = {
    mortalHumans: [],
}

mens.humans[0] = "Socrate"
mens.humans[1] = "Aristotele"
mens.humans[2] = "Erastpthene"
mens.humans[3] = "Herodote"
mens.humans[4] = "me"


if ( mens.humans === undefined || mens.humans.length == 0 ){
    console.log("Here is not any mortal human !");
} else if ( mens.humans !== undefined || mens.humans.length != 0 ){
    mortals.mortalHumans = mens.humans;
    for (let i = 0; i < mortals.mortalHumans.length; i++){
    console.log("We have mortal humans: ", mortals.mortalHumans[i] );
    }
} else {
    console.log("We have not enable to see humans and mortals also :(");
}

var cake = {
    vannila: true,
    cocolate: false,
}

if (cake.vannila === true){
    console.log("This is vannilas cake!");
}else if (cake.cocolate === true){
    console.log("This is cocolates cake!");
}else if (cake.vannila === false && cake.cocolate === false){
    console.log("No cake no gain!");
}else {
    console.log("This cake is both vannilas and cocolates :)");
}