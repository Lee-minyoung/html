// whileloop5.js

let members = [];
members[0] = {members_id: "user01", member_name: "홍길동", point: 80};
members[1] = {members_id: "user02", member_name: "신현욱", point: 90};
members[2] = {members_id: "user03", member_name: "김민식", point: 85};

while(true){
  let searchName = prompt("찾을 친구 이름: ");
  if(searchName == "stop"){
    break;
  }

  let exists=false;
  
  for(i=0; i<members.length; i++){
  //배열의 이름 속성중에서 searchName과 같으면 포인트를 콘솔출력.
    if(searchName == members[i].member_name){
      console.log(`${searchName}의 포인트는 ${members[i].point}`);
      exists = true;
      break;
    }
  }
  if(!exists){
    alert("찾는 이름이 없습니다.");
  }
}
console.log('end of program');