
function timeAdder(value1, label1, value2, label2){
    var collector = []
var numberCollector = (x, y) => {
 if (typeof(x) === "number" && typeof(y) === "number") {
     if ( x > 0) {
        collector[0] = x;
        collector[2] = y;
     }
     else{
        console.log("This numbers are negative...");
     }
 }
 else{
     console.log("Please enter only integer numbers...")
 }
} 
var stringCollector = (x, y) => {
    switch(x, y){
        case "seconds":
            collector[1] = x;
            collector[3] = y;
            break;
        case "minutes":
            collector[1] = x;
            collector[3] = y;
            break;
        case "hours":
            collector[1] = x;
            collector[3] = y;
            break;
        case "days":
            collector[1] = x;
            collector[3] = y;
            break;
        case "second":
            collector[1] = x;
            collector[3] = y;
            break;
        case "minute":
            collector[1] = x;
            collector[3] = y;
            break;
        case "hour":
            collector[1] = x;
            collector[3] = y;
            break;
        case "day":
            collector[1] = x;
            collector[3] = y;
            break;
        default:
            console.log("None of expected words!");
            break;                
    }
}
numberCollector(value1, value2)
stringCollector(label1, label2)
console.log(collector)


var fullyCollector = (array) => {
    console.log(this.array[0])
    console.log(this.array[2])
    

}
fullyCollector(collector)
}
timeAdder(1,"minute",3,"minutes")

