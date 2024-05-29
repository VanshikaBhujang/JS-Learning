console.log("1" + "2");
let str = "1" + 2
console.log(str); //12
console.log(typeof str); // string
str = 1 + "2" //12
console.log(typeof str); // string
console.log("1" + 2 +2); //122
console.log(1 + 2 + "2"); //32

// The unary + operator can be used to convert a variable to a number:
let y = "5";      // y is a string
let x = + y;      // x is a number

console.log("02" > 1); //true , it implicitly converts string "02" to 2
console.log(undefined == 0); //false
console.log(undefined >= 0 ); //false
console.log(undefined <= 0 ); //false