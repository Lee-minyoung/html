// 연습1. exe1.js
let myFriends =[];
myFriends.push({name:"홍길동", escore: 70, kscore: 78, gender: 'Female'});
myFriends.push({name:"신현욱", escore: 80, kscore: 88, gender: 'Female'});
myFriends.push({name:"김민식", escore: 90, kscore: 70, gender: 'Male'});
myFriends.push({name:"석지욱", escore: 95, kscore: 55, gender: 'Female'});


// forEach: 콘솔출력
/*
myFriends.forEach(function(item, idx, ary){
  console.log(item.name);
});
*/

// forEach: 콘솔출력 평균점수 80점 이상.
/*
myFriends.forEach(function(item, idx, ary){
  let avg = (item.escore + item.kscore)/2;
  if(avg >= 80){
    console.log(item.name);
  };
})
*/


// forEach: 콘솔출력 여학생의 영어평균.
sum=0; cnt=0;
myFriends.forEach(function(item, idx, ary){

  if(item.gender=="Female"){
    sum += item.escore;
    cnt++;
  }
})
avg = sum/cnt;

// filter: 여학생의 영어평균 미만-> underAvgAry 저장.
let underAvgAry = myFriends.filter(function(item, idx, ary){
  if(item.gender =='Female' && item.escore < avg){
    return true;
  }
})
console.log(underAvgAry);