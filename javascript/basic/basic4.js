// 278 시간 -> 11일 몇시간 입니다.

// 89345 분 => ?일 ?시간 ?분 입니다.

let number = parseInt(prompt("분을 입력하세요:"));

day = parseInt(number/(24*60));  //number를 하루 분으로 나누기
hour = (number)%(60*24)/60;  //number에서 day를 빼면 시간이 남으니 60으로 나누기 
minute = number % 60;  //number을 60으로 나눈 나머지 값이 minute


console.log(`${number}은 ${parseInt(day)}일 ${parseInt(hour)}시간 ${minute}분`)


// 278 시간 -> 11일 몇시간 입니다.

// 89345 분 => ?일 ?시간 ?분 입니다.



/*
let inputMinutes = prompt("분을 입력하세요:");
let days = parseInt(inputMinutes / (24 * 60));  //number를 하루 분으로 나누기
let hours = parseInt((inputMinutes % (24 * 60)) / 60);  //number에서 day를 빼면 시간이 남으니 60으로 나누기 
let minutes = inputMinutes % 60;  //number을 60으로 나눈 나머지 값이 minute

console.log(`${inputMinutes}분은 ${days}일 ${hours}시간 ${minutes}분`);
*/