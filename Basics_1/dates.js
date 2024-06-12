const myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

const myCreatedDate = new Date(2023, 0, 2, 6, 3, 4);
const createdDate = new Date("2023-01-14")
console.log(myCreatedDate);
console.log(createdDate);

const timestamp = Date.now() //gives current time in milliseconds from 1970
console.log(timestamp);
console.log(myCreatedDate.getTime()); //also converted in milliseconds, in this way it becomes easy to compare time
console.log(Math.floor(Date.now()/1000)); //converts time from milliseconds to second