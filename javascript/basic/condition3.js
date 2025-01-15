// condition3.js
// 2개의 숫자를 입력.
// 2개 다 짝수 -> "모두 짝수."
// 1개 짝수 ->"하나는 짝수."
// 0개 -> "짝수는 없습니다."

let num1 = prompt("숫자입력:");
let num2 = prompt("숫자입력:");

if(num1 == 0 || num2==0 || isNaN(num1) || isNaN(num2)){
  console.log("올바른 값을 입력하시오.")
}

else if(num1 % 2 == 0 && num2 % 2 == 0){
  console.log("모두 짝수.");
}

else if(num1 % 2 == 0 || num2 % 2 ==0){
  console.log("하나는 짝수.");
}

else{
  console.log("짝수는 없습니다.");
}