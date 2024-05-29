const gameName = "vanshika";
const gameCount = 3;
console.log(gameName + " " + gameCount ); //Not a good way to concatenate two strings

console.log(`Game name is ${gameName} and game count is ${gameCount}`); //This is the preferred way which is called string interpolation

const newGame = new String('vanshikab'); //another way of defining string using String constructor
console.log(newGame[5]);
console.log(newGame.__proto__);
console.log(newGame.length);

//string methods 
console.log(newGame.charAt(5));
console.log(newGame.toUpperCase());
console.log(newGame.slice(-6, -2));