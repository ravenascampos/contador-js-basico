var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment() {
  currentNumber = currentNumber + 1;
  currentNumberWrapper.innerHTML = currentNumber;
  if (currentNumber >= 0) {
    currentNumberWrapper.style.color = "#7b3911";
  }
}

var sum = document.getElementById("increment");
sum.addEventListener("click", increment);

function decrement() {
  currentNumber = currentNumber - 1;
  currentNumberWrapper.innerHTML = currentNumber;
  if (currentNumber < 0) {
    currentNumberWrapper.style.color = "red";
  }
}

var subtract = document.getElementById("decrement");
subtract.addEventListener("click", decrement);
