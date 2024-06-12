/*
Primitive Data types (Call by value) STACK-
number
bigint
string
bool
null
undefined
symbol

Non-Premitive data types (call by reference) HEAP - 
Array
Objects
Functions
*/

console.log(null >= 0) //true
console.log(null == 0) //false
console.log(null == undefined) //true

/*
`==` equality operator do typecasting internally if required and then performs the comparison.
`===` strict check equality operator do not do type conversion and performs the comparison between the operands as it is.
*/ 

// Dynamically-typed languages are those (like JavaScript) where the interpreter assigns variables a type 
// at runtime based on the variable's value at the time.

let sym = Symbol('123')
let anotherSym = Symbol('123')
console.log(sym);
console.log(sym === anotherSym); //false

let bigNumber = 31456n; // here n indicates it as a bigint number

//Non Primitive :-
const heros = ["CaptionAmerica", "IronMan", "Hulk"]; //Array
const objs = { //objects
    name : "Vanshika",
    age : "23", 
}
const funcReturn = function(){ //Function
    console.log("Hello world");
}
console.log(funcReturn);
console.log(typeof funcReturn); //function or function object
console.log(typeof heros); //object
console.log(typeof null); //object