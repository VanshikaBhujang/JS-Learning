// for of loop
const myArr = [1, 4, 5, 6, 7];
for (const index of myArr)
    console.log(index);

const myMap = new Map();
myMap.set('a', 1);
myMap.set('b', 2);
myMap.set('c', 3);
console.log(myMap);

for (const i of myMap) {
    console.log(i);
}

for (const [key, value] of myMap) {
    console.log(key, '-', value);
}
// NOTE - just like arrays and maps, Objects are not iterable using above mentioned for loop


// for in loop
const obj = {
    username: "vanshika",
    password: "qwerty",
    age: 22
}

for (const key in obj) {
    console.log(`key ${key} and value ${obj[key]}`);
}

const arr = [5, 'hello', 7.99, 'bye'];
for (const key in arr) {
    console.log(`key - ${key} and value - ${arr[key]}`);
};

for (const key in myMap) {
    console.log(`key - ${key} and value - ${myMap[key]}`);
}
// NOTE - Maps are not iterable using for in loop



// forEach loop for arrays
arr.forEach(function (i, index, arr){
    console.log(i, index, arr);
}) // here function is callback function which is called implicitely

function print(item){
    console.log(item);
}

arr.forEach((i, index, arr) => {
    console.log(i, index, arr);
});

arr.forEach(print)

const arr1 = [
    {
        language: "javascript",
        extension: ".js"
    },
    {
        language: "python",
        extension: ".py"
    },
    {
        language: "java",
        extension: "java"
    }
]

arr1.forEach((item) => {
    console.log(item.language);
    console.log(item.extension);
});


// map function
const resArr = myArr.map( (num) => num + 10)
console.log(resArr);

// chain of functions
const resArr1 = myArr.map( (num) => num * 10 )
                    .map( (num) => num + 1 )
                    .filter( (num) => num > 20)

console.log(resArr1);
