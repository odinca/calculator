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

// Operation variables
let firstNum = 0;
let secondNum = 0;
let operator

function operate(first, second, oper) {
    const operators = [
        { type: "+", func: add,},
        { type: "-", func: subtract, },
        { type: "*", func: multiply, },
        { type: "/", func: divide, }
    ]
    for (let op of operators) {
        if (op.type == oper) {return op.func(first, second)}
    };
}

function handleClick(event) {
    const clickedButtonContent = event.target.textContent;
    onDisplay(clickedButtonContent);
}

function getNumber() {
    let numButtons = document.querySelectorAll(".number");
    numButtons.forEach(button => button.addEventListener("click", handleClick))
}

function onDisplay(selectedNum) {
    const displayDiv = document.querySelector(".display");
    displayDiv.textContent = `${selectedNum}`;
    //return displayDiv
}

function calculator() {
    onDisplay(firstNum);
    firstNum = getNumber();
    return firstNum
}


calculator();