
function division(){
  var firstNumber = document.getElementById('firstNumber').value;
  var secondNumber = document.getElementById('secondNumber').value;
  firstNumber = Math.trunc (firstNumber);
  secondNumber = Math.trunc (secondNumber);
  alert(firstNumber % secondNumber);
}
