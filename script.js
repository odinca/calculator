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
let firstNum
let secondNum
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