var header = document.getElementById("header");
var secHeader = document.getElementById("secheader");
var tbody = document.getElementById("tbody");
var table = document.getElementById("table");

header.innerHTML = "Press and key for start the game :)";
secHeader.innerHTML = "Tic-Tac-Toe";
table.classList.add("table");
header.classList.add("header");
secHeader.classList.add("secheader");
table.style.marginTop = "90px"

for ( i = 0; i < 3; i++ ) {
    var tr = document.createElement("TR");
    tr.setAttribute("id" , "row-" + i);
    tbody.appendChild(tr);
}

for ( i = 0; i < 3; i++ ) {
    let trInside = document.getElementById("row-" + i);
    th = document.createElement("TH");
    th1 = document.createElement("TH");
    th2 = document.createElement("TH");
    th.setAttribute("id", "col-" + i);
    th1.setAttribute("id", "col--" + i);
    th2.setAttribute("id", "col---" + i);
    trInside.append(th, th1, th2);
}

const ids = [ "col-0", "col--0", "col---0", "col-1", "col--1", "col---1", "col-2", "col--2", "col---2" ];
starter(counter, counterOld);

for ( n = 0; n < ids.length; n++) {
    var counter = true;
    var counterOld = false;
    let elems = ids[n];
    document.getElementById(elems).addEventListener("click", function() {
        if(counter === true) {
            document.getElementById(elems).innerHTML = "X"
            counterOld = true;
            counter = false;
        }
        else if(counterOld === true) {
            document.getElementById(elems).innerHTML = "O"
            counter = true;
            counterOld = false;
        }
    })
}



function starter(x, y) {
    window.alert("Whanna be X click OK or Canel to be O")
    if (confirm){
        x = false;
        y = true;
    }
    else{
        x = true;
        y = false;
    }
}

// for ( n = 0; n < ids.length; n++ ) {
//             var element = document.getElementById(ids[n]);
//             element.addEventListener("click", function(){
//                 if (counter === 0) {
//                     document.getElementById(ids[n]).innerHTML = "X"
//                 } else {
//                     document.getElementById(ids[n]).innerHTML = "O"
//                 } counter ++
//                   console.log(counter)
// })
// }



// const elements = document.querySelectorAll(ids.map(id => `#${id}`).join(", "));
// 
// var element = elements.values


// console.log(elements)
// console.log(element)



// // for (i of ids) {
//     for (n = 0; n < ids.length; n++){
//     document.getElementById(ids[n]).addEventListener("click", function() {
//         if(counter === 0 ){document.getElementById(ids[n]).innerHTML = "X"}
//         else{document.getElementById(ids[n]).innerHTML = "O"}
//         counter ++
//         console.log(counter)
// })
// }}



// let counter = 0;
// document.getElementById("col-0").addEventListener("click", function() {
//     if(counter === 0 ){document.getElementById("col-0").innerHTML = "X"}
//     else{document.getElementById("col-0").innerHTML = "O"}
//     counter ++
//     console.log(counter)
//     counter ++
// })
// document.getElementById("col-1").addEventListener("click", function() {
//     if(counter === 0 ){document.getElementById("col-1").innerHTML = "X"}
//     else{document.getElementById("col-1").innerHTML = "O"}
// counter ++
// console.log(counter)})
// document.getElementById("col-2").addEventListener("click", function() {
//     if(counter === 0 ){document.getElementById("col-2").innerHTML = "X"}
//     else{document.getElementById("col-2").innerHTML = "O"}
// counter ++
// console.log(counter)})
// document.getElementById("col--0").addEventListener("click", function() {
//     if(counter === 0 ){document.getElementById("col--0").innerHTML = "X"}
//     else{document.getElementById("col--0").innerHTML = "O"}
// counter ++
// console.log(counter)})
// document.getElementById("col--1").addEventListener("click", function() {
//     if(counter === 0 ){document.getElementById("col--1").innerHTML = "X"}
//     else{document.getElementById("col--1").innerHTML = "O"}
// counter ++
// console.log(counter)})
// document.getElementById("col--2").addEventListener("click", function() {
//     if(counter === 0 ){document.getElementById("col--2").innerHTML = "X"}
//     else{document.getElementById("col--2").innerHTML = "O"}
// counter ++
// console.log(counter)})
// document.getElementById("col---0").addEventListener("click", function() {
//     if(counter === 0 ){document.getElementById("col---0").innerHTML = "X"}
//     else{document.getElementById("col---0").innerHTML = "O"}
// counter ++
// console.log(counter)})
// document.getElementById("col---1").addEventListener("click", function() {
//     if(counter === 0 ){document.getElementById("col---1").innerHTML = "X"}
//     else{document.getElementById("col---1").innerHTML = "O"}
// counter ++
// console.log(counter)})
// document.getElementById("col---2").addEventListener("click", function() {
//     if(counter === 0 ){document.getElementById("col---2").innerHTML = "X"}
//     else{document.getElementById("col---2").innerHTML = "O"}
// counter ++
// console.log(counter)})