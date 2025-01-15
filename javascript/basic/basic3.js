// basic3.js

let num1 = parseInt(prompt("숫자 입력: "));
let num2 = parseInt(prompt("숫자 입력: "));
num1 += 5;  //parseInt(num1) +3;
num2 -= 3;  //parseInt(num2) -3;
// console.log(num1, num2)
let result= num1 - num2;
console.log(`${num1}에서 ${num2}의 값을 뺀 값은 ${result} 입니다.`);