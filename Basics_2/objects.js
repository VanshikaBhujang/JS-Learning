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


// object using Object constructor
// const user1 = new Object()
const user2 = {} //both line no. 47 and 48 will do same thing, create an empty object

// console.log(user1, user2);

//nested objects - 
const user1 =  {
    fullname : {
        firstname : "vedika",
        surname : {
            middlename : "kumari",
            lastname : "bhujang"
        }
    }
}
console.log(user1.fullname.surname.lastname);

const user3 ={1 : "a", 2 : "b"}
const user4 = { 3 : "c", 4 : "d"}
const user5 = {user3, user4} 
console.log(user5);
user3.user4 = user4
console.log(user3);
const user6 = {...user3, ...user4} //spread operator
console.log(user6);

//Object.assign()

const obj1 = Object.assign({}, user3, user4); //assign methods combines the key value pairs of source objects and assigns them
// into target object here target is {} and source are user3, user4
console.log(obj1);

const obj2 = {
    age : "45",
    email : "vanshika.com"
}
const obj3 = Object.assign(user4, obj2) // here target is user4 and source is obj2 and since assign methods return an object so 
// here we've assigned the returned object into obj3, obj3 and user4 will be same
console.log(user4);
console.log(obj3);
console.log(user4 === obj3); 
console.log(Object.keys(obj2)); //returns the keys in form of an array
console.log(Object.values(obj2)); //returns the values in form of an array
console.log(Object.entries(obj2)); // coverts each key value pair in the object into an array first and then returns a combined
// array

console.log(obj2.hasOwnProperty('age')); //checks if any key with the name 'age' exists in obj2 or not