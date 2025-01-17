// object2.js
// concat(배열요소 합)

let numAry1 = [10, 20];
let numAry2 = [30, 40];
let resultAry = numAry1.concat(numAry2);

console.log(resultAry.join('-').split('-'));
// join -> 배열 -> 문자열
// split -> 문자열 -> 배열

let result = resultAry.join('-').split('-');
result.push('60');  // <->unshift
console.log(result.pop());  // <->shift

console.log(result.indexOf('20'));  // 요소의 인덱스 반환.

//console.clear();
result = ["홍길동", "김민수", "허상식", "박창식"]
/*
if(result.indexOf('김민수') != -1){
  console.log("찾는 이름이 존재합니다.")
}
else{
  console.log("찾는 이름이 없습니다.")
}*/

console.log(result.at(1));  //인덱스에 해당하는 값을 반환.

result.sort().reverse().join();  //sort 배열 정렬(가나다순), reserve 역순정렬
console.log(result);