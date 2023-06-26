const increaseBtn = document.querySelector("#increaseBtn");
const decreaseBtn = document.querySelector("#decreaseBtn");
const resetBtn = document.querySelector("#resetBtn");
const theNum = document.querySelector("#theNum");
//Get Elements in HTML

let counterValue = 0;
//초기 카운터의 값을 0으로 설정

decreaseBtn.addEventListener('click', decreaseNum);
increaseBtn.addEventListener('click', increaseNum);
resetBtn.addEventListener('click', resetNum);
//클릭 시 아래 3개의 함수를 실행한다. 각각 counterValue를 조절한다.

function decreaseNum(){
  counterValue -= 1;
  console.log('decreaseValue');
  theNum.innerHTML = counterValue;
};

function increaseNum(){
  counterValue += 1;
  console.log('increaseValue');
  theNum.innerHTML = counterValue;
};

function resetNum(){
  counterValue = 0;
  console.log('resetValue');
  theNum.innerHTML = counterValue;
};
