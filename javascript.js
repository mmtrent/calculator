let firstNum = "";
let secondNum = "";
let num = "";
let operator = "";
let operatorSequence = 1;

const display = document.getElementById("display");

// take input from calculator button, and pass to combineDigits function
const numButtons = document.querySelectorAll("button.numbers");
numButtons.forEach((button) => 
    button.addEventListener('click', () => combineDigits(button.textContent))
)

const operatorButtons = document.querySelectorAll("button.operators");
operatorButtons.forEach((button) => 
    button.addEventListener('click', () => operatorKey(button.textContent))
)

const equalButton = document.querySelector("#equals");
equalButton.addEventListener('click', () => calculateAndDisplay())

const clearButton = document.querySelector("#clear");
clearButton.addEventListener('click', () => clear())

function combineDigits(n) { // take input from calculator keyboard and concatenate digits and save as variable
    stringNum = n.toString(); //convert input to string
    num = num + stringNum; // concatenate digits
    num = parseInt(num); // convert back to int
    display.textContent = num; // return variable
    if (operator) {
        secondNum = num;
    }
}

function operatorKey (key) { 
    if (operator) {
        result = calculateAndDisplay();
        display.textContent = result;
    }
    firstNum = num; // when an operator key is pressed, store first number as variable,
    operator = key; // store selected operator as variable for later calculation
    num = ""; // prompt for second number


}

const calculate = a => str => b => {switch(str) {
    case '+': return a + b
    case '-': return a - b
    case '/': return a / b
    case 'X': return a * b
    default: return 'Invalid operation'
  }}

function calculateAndDisplay() {
    let result = calculate (firstNum) (operator) (secondNum)
    display.textContent = result;
    num = result;
    secondNum = "";
    operator = "";
    return result;
}

function clear() {
    firstNum = "";
    secondNum = "";
    num = "";
    operator = "";
    display.textContent = 0;
}