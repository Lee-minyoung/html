// basic1.js

let myName = "이민영";
let myPhone = "010-4192-4748";
let myAdress = "달서구 용산동";

let largeNumber = 1000000000000000000000000000000000n;
console.log(largeNumber);

const bloodType = "O";
// bloodType = "A";  // ->다시 선언X
const PI =3.14;  //프로그램 변하지 않는 상수 값 선언.

myName = "홍길동";

console.log("내 이름은 " + myName + " 입니다.");
console.log('연락처는 ' + myPhone + ' 입니다.');
console.log(`주소는 ${myAdress} 입니다.`);

console.log(`반지름 5인 원의 넓이는 ${5 * 5 * PI} 입니다.`);

let myInfo = {
  name:"홍길동",
  age: 20
};

let score = [10, 20, 30];  //배열.
let specialType = null;

console.log(typeof specialType);  //변수의 자료형을 출력.