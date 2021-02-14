function timeAdder(x, y) { 
var collectorNumber = []
var collectorString = []
 var numberCollector = (x, y) => {
  if ((typeof(x) === "number") && (typeof(y) === "number")){
    if (x > 1 && y > 1 ){
      collectorNumber[0] = x;
      collectorNumber[1] = y;
      console.log("working")
    }
    else if (x < 1){
      console.log("Please Enter NoneNegative numbers")
    }
    else{
      c
    }
    }
  else{ 
      console.log("Please Enter Only numbers")
    }
  }
  var stringCollector = (x, y) => {
    switch(x, y){
      case "seconds":
        collectorString[0] = x;
        collectorString[1] = y;
            break;
        case "minutes":
          collectorString[0] = x;
          collectorString[1] = y;
            break;
        case "hours":
          collectorString[0] = x;
          collectorString[1] = y;
            break;
        case "days":
          collectorString[0] = x;
          collectorString[1] = y;
            break;
        case "second":
          collectorString[0] = x;
          collectorString[1] = y;
            break;
        case "minute":
          collectorString[0] = x;
          collectorString[1] = y;
            break;
        case "hour":
          collectorString[0] = x;
          collectorString[1] = y;
            break;
        case "day":
          collectorString[0] = x;
          collectorString[1] = y;
            break;    
        default:
            console.log("None of expected words!");
            break; 
    }
  }  
numberCollector(1, 2)
stringCollector("day" ,"hour")
console.log(collectorNumber)
console.log(collectorString)



}
timeAdder()