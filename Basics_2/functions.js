
function sayMyName(){
    console.log("Hello Vanshika");
}

sayMyName(); // --> function execution
// sayMyName --> function reference

function addNumbers(...num){ // ... is called rest/spread operator, rest in the current case
    return num               // rest operator collects the scattered values and combines them into a list
}
console.log(addNumbers(200, 30, 5));

//passing an object to a function
function func1(obj){
    return `Username is ${obj.username} and password is ${obj.password}`
}

res = func1({
    "username": "vanshika",
    "password": "qwerty123"
})
console.log(res);