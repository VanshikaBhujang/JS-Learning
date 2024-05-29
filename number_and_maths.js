const num = 100;
const num1 = new Number(400);
console.log(num);
console.log(num1);
console.log(num1.toFixed(2));

const num2 = 12.893;
console.log(num2.toPrecision(3));

const num3 = 1000000;
console.log(num3.toLocaleString()); //US standard
console.log(num3.toLocaleString('en-IN')); //Indian standard
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

//*************Maths*********************
console.log(Math);
console.log(Math.abs(-6));
console.log(Math.round(6.7));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.9));

console.log(Math.random()); //gives random value between 0 and 1
console.log(Math.random()*10 + 1); // +1 because in case the value given by random method is 0.021 or something, basically 
// to avoid getting 0
console.log(Math.floor(Math.random()*10 + 1)) //to get a whole number instead of float

// to get a random number between a specific range-
const min= 10;
const max = 20;
console.log(Math.floor(Math.random()* (max - min + 1))); // this is not providing min range as 10
console.log(Math.floor(Math.random()* (max - min + 1) + min)); // this will make sure that the number is greater than 10