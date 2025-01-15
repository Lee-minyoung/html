// condition4.js

const obj = {
  name: "홍길동",
  age: 20,
  showName: function(){  // 메소드.
    console.log(obj.name);
  }
}
obj.showName();

// 1~10 사이의 임의 값 출력.
console.log();
let num1 = parseInt(Math.random() * 10) + 1;
let num2 = parseInt(Math.random() * 10) + 1;

let sumEven = 10;  // 짝수의 값은 sumEven에 합치기
let sumOdd = 20;  // 홀수의 값은 sumOdd에 합치기

// truthy (10,"aa") vs. falsy (0, "", null, undefined)

console.log(num1, num2);

if(num1 % 2 == 0 && num2 % 2 == 0){
  console.log(sumEven + num1 + num2);
  console.log(sumOdd);
}
else if(num1 % 2 == 0 && num2 % 2 != 0){
  console.log(sumEven + num2);
  console.log(sumOdd + num1);
}
else if(num1 % 2 != 0 && num2 % 2 == 0){
  console.log(sumEven + num1);
  console.log(sumOdd + num2);
}
else if(num1 % 2 != 0 && num2 % 2 != 0){
  console.log(sumEven);
  console.log(sumOdd + num1 + num2);
}