let display = document.getElementById('display');
let currentInput = '0';

function appendToDisplay(value) {
    if (currentInput === '0' && value !== '.') {
        currentInput = value;
    } else {
        currentInput += value;
    }
    updateDisplay();
}

function clearDisplay() {
    currentInput = '0';
    updateDisplay();
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        updateDisplay();
    } catch (error) {
        currentInput = 'Error';
        updateDisplay();
        setTimeout(clearDisplay, 1000); // Reset after 1 second if error
    }
}

function updateDisplay() {
    display.textContent = currentInput;
    display.style.animation = 'none'; // Reset animation
    display.offsetHeight; // Trigger reflow
    display.style.animation = 'fadeIn 0.3s ease-in-out'; // Reapply animation
}
