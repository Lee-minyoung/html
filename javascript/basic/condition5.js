// condition5.js
// 세 수 중에서 가장 큰 값 출력


let num1 = parseInt(Math.random()*100)+1;
let num2 = parseInt(Math.random()*100)+1;
let num3 = parseInt(Math.random()*100)+1;

console.log(num1, num2, num3);

if(num1>num2 && num1>num3){
  console.log(num1);
}
else if(num2>num1 && num2>num3){
  console.log(num2);
}
else if(num3>num1 && num3>num2){
  console.log(num3);
}
// 두 수: 1~100까지의 임의의 값을 생성.
// 큰 수에서 작은 수를 빼서 결과 값을 출력.

/*console.log(num1, num2);

if(num1>num2){
  console.log(num1-num2);
}
else {
  console.log(num2-num1);
}*/
