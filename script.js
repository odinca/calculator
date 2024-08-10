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
let operator
let displayData = "";

function operate(first, second, oper) {
    for (let op of operators) {
        if (op.type == oper) {return op.func(first, second)}
    };
}

function checkForCompOp(displayString) {
    return operators.some(op => displayString.includes(op.type));
}

function onDisplay(selectedBtn) {
    const displayDiv = document.querySelector(".display");

    if (checkForCompOp(displayData)) {
        displayData += selectedBtn.toString();
            displayDiv.textContent = displayData;
            console.log(checkForCompOp(displayData));
    }
    else {
        displayData += selectedBtn.toString();
        displayDiv.textContent = displayData;
        console.log(firstNum);
        console.log(checkForCompOp(displayData));
    }
}

function getButton() {
    let numButtons = document.querySelectorAll("button");
    numButtons.forEach(button => button.addEventListener("click", (event) => onDisplay(event.target.textContent)));
}

function handleClick(event) {
    
}

getButton();