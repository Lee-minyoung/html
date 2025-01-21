// object4.js
// 1일의 요일? 마지막날?
let month = 2;
let date = 0;
let year = 2024;

let today = new Date();

today.setFullYear(year);
today.setMonth(month);
today.setDate(date);

// console.log(today, doay.getDate());
console.clear();
let a ='hello';
let b ='hello';
console.log(a == b);

today = new Date();
let now = new Date();

console. log(today.getTime() == now.getTime());

console.log(new Date(2000));
console.log(today.valueOf() == now.valueOf());
console.log(today.valueOf());
//2022년 5월
/*
today.setFullYear(year);
today.setMonth(month);

today = new Date(2022, 4, 17);
console.log(today);
*/