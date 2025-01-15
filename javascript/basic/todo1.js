// 입력값 2개 a,b 두 값을 비교해서 a>b 콘솔 출력 '경고' a<b a+b*(b의 제곱)

let a= parseInt(prompt("숫자 입력:"));
let b= parseInt(prompt("숫자 입력:"));

if(a>b){
  console.log("경고");
}
else if(a<b){
  console.log(a+(b*(b*b)));
}