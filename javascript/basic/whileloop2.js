// whileloop2.js

// 숫자이면 최고점수를 구하고
let max=0;

let temp = parseInt(inputValue);
if(isNaN(temp)){  //입력한 값이 문자열이라면??
  if (inputValue =='stop'){
    run=false;
  } 
  else{
    alert('정상적인 값을 입력하세요.');
  }
} 

else{ //문자가 아니라면??
  if(max < parseInt(inputValue)){
    max = parseInt(inputValue);
  }
}
//stop 입력->반복문 종료.
//제일 큰 값 출력.
/*
let max = 0;

while(true) {
  let inputValue = prompt("점수를 입력하세요:");

  console.log(inputValue);

  if (inputValue == "stop") {
    break;
  }
  else {
    if (max < inputValue) {
      max = inputValue;
    }
  }
}

console.log(`최대값은 ${max}`);
*/