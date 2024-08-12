const myArr = [1,2,3,5,6,7,8];

const res = myArr.forEach((item) => {
    return item
});

console.log(res); // undefined because for loop does not return anything explicitely but returns an array implicitely 

// If you want to filter the values of an array based on some condition then you can use filter which results in form of an array itself
const res1 = myArr.filter((item) =>( item > 4));
console.log(res1);

// If still need to filter the values of array based on some condition using forEach loop only then
const newArr = []
myArr.forEach((num)=>{
    if (num>4)
        newArr.push(num)
});
console.log(newArr);

const myNewArr = myArr.reduce((acc, currVal) => {
    console.log(`acc - ${acc} and current value - ${currVal}`);
    return currVal = currVal + acc;
}, 0);

console.log(myNewArr);

