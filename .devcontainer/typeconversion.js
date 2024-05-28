let score = "33";
let scoreNm = Number(score);
// console.log(typeof scoreNm)
// console.log(scoreNm);

// score= "33abc";
// scoreNm = Number(score);
console.log(typeof scoreNm) //number
console.log(scoreNm); //NaN --> Not a Number (since characters in string score are alphaneumeric)

score = null;
scoreNm = Number(score)
console.log(typeof scoreNm) //number
console.log(scoreNm); // 0

score = undefined;
scoreNm = Number(score)
console.log(typeof scoreNm) //number
console.log(scoreNm); // NaN