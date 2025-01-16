// event1.js

let item = document.querySelector('button[name="add"]');
item.addEventListener('click', function(){
  //value - >valueAsNumber: 숫자로 인지시켜주기 때문에 아래에 parseInt를 붙여주지 않을 때 사용할 것
  let n1 = document.querySelector('input[name="first"]').value; 
  let n2 = document.querySelector('input[name="second"]').value;
  console.dir(n1 + n2);

  document.querySelector('input[name="result"]').value = parseInt(n1) + parseInt(n2);
});



let item2 = document.querySelector('button[name="minus"]');
item2.addEventListener('click', function(){
  let n1 = document.querySelector('input[name="first"]').value; 
  let n2 = document.querySelector('input[name="second"]').value;
  console.dir(n1 - n2);

  document.querySelector('input[name="result"]').value = parseInt(n1) - parseInt(n2);
})