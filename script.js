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
// If user only clicks equals without clicking any numbers or operators. 
    if (firstNum == 0 && secondNum == 0 && selectedOperator.length == 0 && displayData.length == 0) {
        selectedOperator = "+";
    }
// If user types number and presses operator, but presses equals before selecting the second number
    else if (selectedOperator.length == 0 && displayData.length > 0) {
        firstNum = Number(displayData)
        secondNum = 0;
        selectedOperator = "+";
    }
    else {
        secondNum = Number(displayData);
    }
    displayData = "";
    onDisplay(operate(firstNum, secondNum, selectedOperator));
    selectedOperator = "";
}

const displayDiv = document.querySelector(".display");

function onDisplay(selectedBtn) {
    displayData += selectedBtn.toString();
    displayDiv.textContent = displayData;
}

function clearDisplay() {
    displayDiv.textContent = 0;
    displayData = "";
    selectedOperator = "";
    firstNum = 0;
    secondNum = 0;
}

function operate(first, second, oper) {
    for (let op of operators) {
        if (op.type == oper) {return op.func(first, second)}
    };
}

function onOpClick(opToAdd) {
    if (selectedOperator.length > 0) {
        provideSum();
    }
    firstNum = Number(displayData);
    displayData = "";
    selectedOperator = opToAdd;
}

// Function to control what happens when a number is pressed
function getNumButton() {
    let numButtons = document.querySelectorAll("button.number");
    numButtons.forEach(numButton => numButton.addEventListener("click", () => onDisplay(numButton.textContent)));
}

// Function to control what happens when an operator is pressed
function getOperator() {
    let opButtons = document.querySelectorAll(".operator");
    opButtons.forEach(opButton => opButton.addEventListener("click", () => onOpClick(opButton.textContent)));
}

getNumButton();
getOperator();

const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");

// Control what happens when equals or clear buttons are pressed
equals.addEventListener("click", () => provideSum());
clear.addEventListener("click", () => clearDisplay());