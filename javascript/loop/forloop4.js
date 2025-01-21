// forloop4.js
// 0 <- Marh.random()*100 < 100 -> 50부터 100.

let scores = [];
let sum = 0;
let max = 0;

for(i=0; i<10; i++){
  scores[i] = parseInt(Math.random()*51)+50;

/*for(i=0; i<10; i++){
    scores[i] = parseInt(Math.random()*100)+1;

    if(scores[i] < 51){
      scores[i] = scores[i] + 50;  
    }*/
}

// 평균계산.
for (let i=0; i<10; i++){
  sum += scores[i];
}

//최대값
for(i=0; i<10; i++){
  if(max < scores[i])
    max = scores[i];
}

console.log(scores);
console.log(`평균: ${sum/10}`);
console.log(`최대값은: ${max}`);