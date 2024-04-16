let currentInput = '0';

function appendNumber(number) {
    if (currentInput === '0' && number !== '0') {
        currentInput = '';
    }
    currentInput += number;
    document.getElementById('result').innerText = currentInput;
}

function appendOperator(operator) {
    if (currentInput !== '' && !isNaN(currentInput[currentInput.length - 1])) {
        currentInput += operator;
        document.getElementById('result').innerText = currentInput;
    }
}

function appendDecimal() {
    if (currentInput.indexOf('.') === -1) {
        currentInput += '.';
        document.getElementById('result').innerText = currentInput;
    }
}

function backspace() {
    currentInput = currentInput.slice(0, -1);
    if (currentInput === '') {
        currentInput = '0';
    }
    document.getElementById('result').innerText = currentInput;
}

function clearScreen() {
    currentInput = '0';
    document.getElementById('result').innerText = currentInput;
}

function clearNewEntry() {
    currentInput = '0';
    document.getElementById('result').innerText = currentInput;
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        document.getElementById('result').innerText = currentInput;
    } catch (error) {
        currentInput = 'Error';
        document.getElementById('result').innerText = currentInput;
    }
}
