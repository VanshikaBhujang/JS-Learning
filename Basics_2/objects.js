//singleton objects through object.create()

//Non singleton but multiple instances - Object literals
const mySym = Symbol("key1")

const user= {
    name : "Vanshika",
    "full name" : "Vanshika Bhujang",
    [mySym] : "key2", // to use mySym as symbol data type always use [] notation
    age : 19,
    email : "vanshikabhujang.com"
}

console.log(user);

//two ways to access values of objects using keys -
// console.log(user.name);
// console.log(user["name"]); //internally JS converts the each key for eg. name to "name" (string)
// console.log(user["full name"]); //cannot access full name using dot operator as its defined using [] notation
// console.log(typeof user[mySym]); //string
// console.log(user);

//changing the value of any key -
user["email"] = "vedikabhujang.com"
user.age = 21
console.log(user);

//Restricting the object from changing
// Object.freeze(user)
user.age = 30
console.log(user); //age won't be changed to 30

//defining function as a part of object - 
user.greeting = function(){
    console.log("Hello user");
}
console.log(user.greeting); // this will return only the reference of the function without running it
console.log(user.greeting()); //this will run the function

user.greetingTwo = function(){
    console.log(`Hello ${this.name}`);
}
console.log(user.greetingTwo());


