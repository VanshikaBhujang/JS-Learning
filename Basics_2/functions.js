
function sayMyName(){
    console.log("Hello Vanshika");
}

sayMyName(); // --> function execution
// sayMyName --> function reference

console.log(addNumbers(200, 30, 5));  // function 'addNumbers' can be called before its definition
function addNumbers(...num){ // ... is called rest/spread operator, rest in the current case
    return num               // rest operator collects the scattered values and combines them into a list
}


//passing an object to a function
function func1(obj){
    return `Username is ${obj.username} and password is ${obj.password}`
}
const res = func1({
    "username": "vanshika",
    "password": "qwerty123"
})

// console.log(resp(3));   // below function cannot be called before its initialization because its a variable
const resp = function(num){
    return num +2 
}
console.log(resp(3));


// ******** this keyword and Arrow functions ***********
const obj1 = {
    username: "vanshika",
    welcomeMessage: function(){
        console.log(`${this.username}`); // this refers to current object ( obj1)
        console.log(this);
    }
}
obj1.welcomeMessage()
obj1.username = "vedika"
obj1.welcomeMessage()
console.log(this); // this is an empty object here since we're now in node env although if you try to console log this in 
// browser then it'll give window object as output since it's the global object in browser

function chai1(){
    const username = "kimberly"
    console.log(this.username); //using this keyword just in a function which does not belong to any object won't work
    // it will result as undefined
}

const response = function chai2(){
    const username = "kimberly"
    console.log(this.username); //using this keyword just in a function which does not belong to any object won't work
    // it will result as undefined
}

// Arrow function
const result = () => {
    const username = "kimberly"
    console.log(this.username); //using this keyword just in a function which does not belong to any object won't work
    // it will result as empty object
}

// Implicit return basically one liner function without return keyword and curly braces
const addTwoNumbers = (num1, num2) => (num1 + num2)
console.log(addTwoNumbers(2, 1));


// *********** Immediately Invoked Function Expressions (IIFE) ******************
/* Reasons for using IIFE
Encapsulation: IIFE creates a private scope for variables, preventing them from polluting the global scope and avoiding conflicts with other parts of your code.
Anonymous or Named: You can define IIFE as an anonymous function (without a name) or a named function (with a name). Anonymous IIFE is more common, but named IIFE can be helpful for debugging.
*/
(function chai1(){
    // NAMED IIFE
    console.log("Hello world!");
})(); // Function execution immediately after function definition
// ** NOTE - here ending the execution call with ';' is necessary for interpretor to understand that this fucntion call is over

( () => {
    // ANONYMOUS IIFE
    console.log("hello world from arrow function!");
})() // This also works for arrow functions