let click = document.getElementById("clickButton");
let reset = document.getElementById("resetButton");
let display = document.getElementById("displayResult");



const doOperation = () => {
  let firstValue = Number(prompt("Please input a number"));
  let secondValue = Number(prompt("Please input a second number"));
  let operation = prompt("Select the operation: + - *");
  let result;

  switch (operation) {
    case "+":
      result = firstValue + secondValue;
      console.log(result);
      display.innerText = `${result}`;
      break;
    case "-":
      result = firstValue - secondValue;
      console.log(result);
      display.innerText = `${result}`;
      break;
    case "*":
      result = firstValue * secondValue;
      console.log(result);
      display.innerText = `${result}`;
      break;
    case "/":
      result = firstValue / secondValue;
      console.log(result);
      display.innerText = `${result}`;
      break;
  }
};

click.addEventListener('click', doOperation)
reset.addEventListener('click', ()=>{
    display.innerText = `0`
})