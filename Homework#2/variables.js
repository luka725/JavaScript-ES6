/*
Before start I Have to say that the pirple is good practic for learn 
hight programming skills. I am glad to using pirple.com.
In JavaScript and also most of programming languages we have type of
variables which helping us to make our code more understandable so
*/

/*
first type of variable which I want to talk about is:


'var' var is most common and usable variable to declaring variables
this type of variable is default for use and meaning of var is also
understandable var means variable we can reassign var, so in 
Javascript we can create as many of variables we want so first of all
we just should type var then space and assign in name etc var myName;
so we already have variable called myName the some reasons we can't
create variable which is starts from number etc var = 1myNAme this is 
wrong for some reason. so var is most comonnly for use.
*/

/*
second type which I want to talk about is:

'const' const is immutable like pi, pi is always 3.14 and it's cannot
be changed so for create constant variable we just should type const
then space between variable name and type and then we should give name 
of our constant variable etc const myName; this is declaring otherwise
const myName = "Luka"; this is assignec variable which is immutable 
it means if we use myName in functions or in scopes or in blocks 
it will be still "Luka" like pi = 3.14 we cannot use variable name
on other types etc var myName or let myName it is wrong and it 
throw us error.
*/

/*
thrid type of variable is:

'let' is mutable in the scopes and functions and objects so if we need
this to our variable change assignment we just should use let 'letting'
for create mutable variable we should type let than space and name of 
our let variable etc let myName;
*/

/*
and the last topic which i want to talk is Hoisting:

Hoisting is JavaScript's default behavior of moving declarations to the top.
In JavaScript, a variable can be declared after it has been used.
In other words; a variable can be used before it has been declared.
Hoisting is only declaring not assigning and not declaring this menas
if we type:
x = 5; first and then we sat var x; or const x; or let x; it will be hoisting.
*/
var variable = 37
function myFunction () {
  var variable = 40
  console.log(variable) // 40
}
console.log(variable) // 37
myFunction()
console.log(variable) // 

let variablE = 37
function multiplyBySomeNumber(number) {
  return function(innerNumber) {
     return innerNumber * number
  }
}
const multiplyByFive = multiplyBySomeNumber(5)
let variableTimesFive = multiplyByFive(variable)
console.log(variableTimesFive) // 
