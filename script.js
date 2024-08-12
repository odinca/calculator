// Basic operator functions
function add(num1, num2) {
    return num1 + num2
}
function subtract(num1, num2) {
    return num1 - num2
}
function multiply(num1, num2) {
    return num1 * num2
}
function divide(num1, num2) {
    return num1 / num2
}

const operators = [
    { type: "+", func: add,},
    { type: "-", func: subtract, },
    { type: "*", func: multiply, },
    { type: "/", func: divide, }
]

// Operation variables
let firstNum = 0;
let secondNum = 0;
let displayData = "";
let selectedOperator = "";

function provideSum() {
    secondNum = Number(displayData.split(selectedOperator)[1]);
    displayData = "";
    onDisplay(operate(firstNum, secondNum, selectedOperator));
}

function onDisplay(selectedBtn) {
    const displayDiv = document.querySelector(".display");
    if (selectedBtn == "clear") {
        displayData = "";
        selectedOperator = "";
    }
    else {
        displayData += selectedBtn.toString();
    }
    displayDiv.textContent = displayData;
}

function operate(first, second, oper) {
    for (let op of operators) {
        if (op.type == oper) {return op.func(first, second)}
    };
}

function onOpClick(opToAdd) {
    firstNum = Number(displayData);
    onDisplay(opToAdd);
    selectedOperator = opToAdd;
}

function getNumButton() {
    let numButtons = document.querySelectorAll("button.number");
    numButtons.forEach(numButton => numButton.addEventListener("click", () => onDisplay(numButton.textContent)));
}

function getOperator() {
    let opButtons = document.querySelectorAll(".operator");
    opButtons.forEach(opButton => opButton.addEventListener("click", () => onOpClick(opButton.textContent)));
}

getNumButton();
getOperator();

const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");

equals.addEventListener("click", () => provideSum());
clear.addEventListener("click", () => onDisplay("clear"));