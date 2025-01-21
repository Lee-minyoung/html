// function2.js
/*
함수이름: getMax
매개변수: 배열(numAry)
기능: 배열의 요소중에서 제일 큰 값을 콘솔에 출력
*/


  let ary1 = [3, 15, 22, 7];
  let ary2 = [23, 11, 45, 30];
  let ary3 = [];
  for(let i = 0; i < 5; i++){
    ary3[i] = parseInt(Math.random() * 50);
  }
  console.log(ary3);
  
  
  function getMax(numAry=[]){
    let max = 0;
  
    for(let i = 0; i < numAry.length; i++){
      if(max < numAry[i]){
        max = numAry[i];
      }
    }
    console.log('가장 큰 값은: '+ max);
    return max; //함수를 호출한 영역으로 반환
  } //end of getMax()
  
  document.write(getMax(ary1));
  // alter(getMax(ary2));
  getMax(ary3);
  // getMax());


getMax(ary1);
getMax(ary2);
getMax(ary3);