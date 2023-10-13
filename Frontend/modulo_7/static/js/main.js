const inputA = document.getElementById('a');
const inputB = document.getElementById('b');
const result = document.getElementById('result');
//const form = ;
document.getElementById('form').addEventListener('submit', function (e) {
  e.preventDefault();
  let A = inputA.value;
  let B = inputB.value;

  showResult(A,B);
});

function showResult(a,b) {
  if (a > b) {
    result.style.backgroundColor = 'LightGreen';
    result.value = "Boa, você conseguiu!";
  } else if (a == b) {
    result.style.backgroundColor = 'LemonChiffon';
    result.value = "Tenta de novo.";
  } else {
    result.style.backgroundColor = 'LightCoral';
    result.value = "NÃOOOOO !!!";
  }
};