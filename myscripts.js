let currentInput = "";
let firstNum = "";
let operator = "";
let secondNum = "";

const buttonsContainer = document.querySelector(".buttons");
const displayEl = document.querySelector(".display");

function divide(num1, num2) {
  if (num2 === 0) return "wrong";
  return num1 / num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function minus(num1, num2) {
  return num1 - num2;
}
function add(num1, num2) {
  return num1 + num2;
}

function getCalculateResult(num1, num2, operator) {
  switch (operator) {
    case "/":
      return divide(num1, num2);

    case "*":
      return multiply(num1, num2);

    case "-":
      return minus(num1, num2);

    case "+":
      return add(num1, num2);

    default:
      break;
  }
}

function setupCustomEvents() {
  buttonsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("number")) {
      const customEvent1 = new CustomEvent("number", {
        bubbles: true,
      });
      e.target.dispatchEvent(customEvent1);
    }
    if (e.target.classList.contains("operator")) {
      const customEvent2 = new CustomEvent("operator", {
        bubbles: true,
      });
      e.target.dispatchEvent(customEvent2);
    }
    if (e.target.classList.contains("function")) {
      const customEvent3 = new CustomEvent("function", {
        bubbles: true,
      });
      e.target.dispatchEvent(customEvent3);
    }
    if (e.target.classList.contains("btn")) {
      const customEvent4 = new CustomEvent("button", {
        bubbles: true,
      });
      e.target.dispatchEvent(customEvent4);
    }
  });
}

document.body.addEventListener("number", (e) => {
  const inputNum = e.target.textContent;

  if (displayEl.textContent.length > 20) return;
  if (displayEl.textContent.includes(".") && inputNum === ".") return;

  if (displayEl.textContent === "0") {
    if (inputNum === "0") {
      currentInput = "0";
    }
    if (inputNum === ".") {
      currentInput = "0.";
    } else if (inputNum !== "0") {
      currentInput = inputNum;
    }
    // }
    // else if (firstNum && secondNum && operator) {
    // firstNum = "";
    // operator = "";
    // secondNum = "";
    // currentInput = inputNum;
  } else {
    currentInput += inputNum;
  }

  displayEl.textContent = currentInput;

  console.log(currentInput);
});

document.body.addEventListener("operator", (e) => {
  if (!firstNum && !currentInput) return;
  if (!firstNum && currentInput) {
    firstNum = parseFloat(currentInput);
    currentInput = "";
    operator = e.target.textContent;
  } else if (firstNum && !currentInput) {
    operator = e.target.textContent;
  } else if (firstNum && currentInput) {
    secondNum = parseFloat(currentInput);
    currentInput = "";
    const result = getCalculateResult(firstNum, secondNum, operator);
    if (result.toString().length > 21) {
      displayEl.textContent = result.toString().slice(0, 21);
    } else {
      displayEl.textContent = result;
    }
    firstNum = parseFloat(result);
    secondNum = "";
  }
  console.log(operator);
});

document.body.addEventListener("function", (e) => {
  switch (e.target.textContent) {
    case "AC":
      currentInput = "";
      firstNum = "";
      operator = "";
      secondNum = "";
      displayEl.textContent = "0";
      break;

    case "+/-":
      if (!currentInput) return;
      currentInput = -parseFloat(currentInput);
      displayEl.textContent = currentInput;
      break;

    case "%":
      if (currentInput) {
        currentInput = parseFloat(currentInput) / 100;
        displayEl.textContent = currentInput;
      } else if (firstNum && secondNum) {
        displayEl.textContent = parseFloat(displayEl.textContent) / 100;
        firstNum = parseFloat(displayEl.textContent);
      }
      break;

    case "=":
      if (firstNum && currentInput && operator) {
        secondNum = parseFloat(currentInput);
        currentInput = "";
        const result = getCalculateResult(firstNum, secondNum, operator);
        if (result.toString().length > 21) {
          displayEl.textContent = result.toString().slice(0, 21);
        } else {
          displayEl.textContent = result;
        }
        firstNum = parseFloat(result);
      } else if (firstNum && secondNum && operator) {
        const result = getCalculateResult(firstNum, secondNum, operator);
        if (result.toString().length > 21) {
          displayEl.textContent = result.toString().slice(0, 21);
        } else {
          displayEl.textContent = result;
        }
        firstNum = parseFloat(result);
      }
      break;

    default:
      break;
  }
});

buttonsContainer.addEventListener("mousedown", (e) => {
  if (e.target.classList.contains("btn")) {
    e.target.style.opacity = "0.6";
  }
});

buttonsContainer.addEventListener("mouseup", (e) => {
  if (e.target.classList.contains("btn")) {
    e.target.style.opacity = "1";
  }
});

setupCustomEvents();
