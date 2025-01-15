// condition2.js
// 입력받은 숫자-> 2의 배수인지, 3의 배수인지?
// 6 -> 2와 3의 배수입니다
// 4 -> 2의 배수입니다, 9 -> 3의 배수입니다.

let inputNumber=prompt("숫자 입력: ");

if (inputNumber ==0 || isNaN(inputNumber)){
  console.log("정상적인 값을 입력하세요.");
}

else if((inputNumber % 2 == 0) && (inputNumber % 3 == 0))
  {console.log("2와 3의 배수입니다.");
}

else if(inputNumber % 2 == 0)
  {console.log("2의 배수입니다.");
}

else if(inputNumber % 3 == 0)
  {console.log("3의 배수입니다.");
}

else{
  console.log("2와 3의 배수가 아닙니다.");
}   