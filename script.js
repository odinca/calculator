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

function getNumber() {
    let numButtons = document.querySelectorAll(".number");
    numButtons.forEach(button => button.addEventListener("click", handleClick))
}

function handleClick(event) {
    const clickedButtonContent = event.target.textContent;
    onDisplay(clickedButtonContent);
}

function checkForCompOp(displayString) {
    return operators.some(op => displayString.includes(op.type));
}

function onDisplay(selectedNum) {
    const displayDiv = document.querySelector(".display");

    for (let op of operators) {
        if (displayData.includes(op.type)) {
            displayData += selectedNum.toString();
            secondNum = Number(displayData);
            displayDiv.textContent = displayData;
            console.log(checkForCompOp(displayData));
            return
        }
        else {
            displayData += selectedNum.toString();
            firstNum = Number(displayData);
            displayDiv.textContent = displayData;
            console.log(firstNum);
            console.log(checkForCompOp(displayData));
            return
        }
    }
    //displayData += selectedNum.toString();
    //displayDiv.textContent = displayData;
    //firstNum = Number(displayData);
    //console.log(firstNum);
}

getNumber();