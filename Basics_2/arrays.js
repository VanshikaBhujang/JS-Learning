const arr = [1, 2, false, "vanshika", 3.456];
console.log(arr);
console.log(arr[3]);
console.log(arr.length);
console.log();

//Arrays creates shallow copies 
// Shallow copy --> Heap
// Deep copy --> Stack

//Array methods -
arr.push("bye");
console.log(arr);
arr.pop();
console.log(arr);
arr.push(2, 3, "bye");
console.log(arr);

arr.unshift(3, 4, 5);
console.log(arr);
arr.shift();
console.log(arr);
arr.shift();
console.log(arr);

const newArr = arr.join();
console.log(`${typeof newArr}, ${newArr}`);

//slice and splice
const arr1 = arr.slice(2, 5); //will slice arr from index 2 to 4, arr will remain unchanged
console.log(arr1);
console.log(arr);

const arr2 = arr.splice(2, 5)//will slice arr from index 2 to 5, arr will also be changed ( arr will consist remaining elements)
console.log(arr2);
console.log(arr);
//****************** */

const marvel_heros = ["caption_america", "ironman", "hulk"];
const dc_heros = ["batman", "superman"];

marvel_heros.push(dc_heros); //this will push dc_heros as array in marvel_heros
console.log(marvel_heros);
marvel_heros.pop();

const newConcatArray = marvel_heros.concat(dc_heros); //concatnates the two arrays into a new array and returns the same
console.log(newConcatArray);

const newSpreadArr = [...marvel_heros, ...dc_heros]; // here `...` is called spread which works same as concatnate 
// Difference betweeen concat and spread --> spread can combine more than two arrays
console.log(newSpreadArr);

const anotherArray = [1, 2, 3, [4, 5], [6, [7, 8]], 9];
const realAnotherArray = anotherArray.flat(Infinity); //here depth can be given as argument in method `infinity` which defines
// upto what depth do we need to flatten the array, here infinity defines upto the last or deepest level
console.log(realAnotherArray);
console.log(Array.isArray("vanshika"));
console.log(Array.from("Vanshika")); // converts vanshika to array 

const obj = { a: 1, b: 2, c: 3 };
const valuesArray = Array.from(Object.values(obj));
console.log(valuesArray);  // [1, 2, 3]
console.log(Array.of(9, 5, 6));