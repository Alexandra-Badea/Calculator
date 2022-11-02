let prevOperand = document.getElementById('prevOperand');
let currentOperand = document.getElementById('currOperand');

let currentValue = '';
let prevValue = '';
let operator = '';
let result = '';
let userTyping = false;
let decimalDot = false;

function getNumber(num) {
    userTyping = true;
    if(userTyping) {
        currentValue += num;
    }
    currentOperand.innerHTML = currentValue;
}

function getOperator(symbol) {
    operator = symbol;
    if(userTyping) {
        userTyping = false;
    }
    if(result) {
        prevValue = result;
        currentOperand.innerHTML = '';
        prevOperand.innerHTML = prevValue + ' ' + operator;
    } else {
        prevValue = currentValue;
        prevOperand.innerHTML = currentValue + ' ' + operator;
        currentOperand.innerHTML = '';
        currentValue = '';
    }    
}

function getResult() {
    result = eval(prevValue + operator + currentValue);
    prevOperand.innerHTML = '';
    currentOperand.innerHTML = result;
    currentValue = '';
    prevValue = result;
    operator = '';
}

function clearAll() {
    prevOperand.innerHTML = '';
    currentOperand.innerHTML = '';
    currentValue = ''
    prevValue = '';
    operator = '';
    result = '';
}

function deleteValue() {
    currentValue = currentValue.slice(0, -1);
    currentOperand.innerHTML = currentValue;
}


