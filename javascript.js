// take input from calculator button, and pass to combineDigits function
const numButtons = document.querySelectorAll("button.numbers");
numButtons.forEach((button) => 
    button.addEventListener('click', () => combineDigits(button.textContent))
)

const operatorButtons = document.querySelectorAll("button.operators");
operatorButtons.forEach((button) => 
    button.addEventListener('click', () => operatorKey())
)

const display = document.getElementById("display");


let firstNum = "";
let secondNum = "";
let Num = "";

function combineDigits(n) { // take input from calculator keyboard and concatenate digits and save as variable
    stringNum = n.toString(); //convert input to string
    Num = Num + stringNum; // concatenate digits
    Num = parseInt(Num); // convert back to int
    display.textContent = Num; // return variable
}

function operatorKey () { 
    firstNum = Num;// when an operator key is pressed, store first number as variable,
                    // store selected operator as variable for later calculation
                    // prompt for second number

}

// const addButton = document.querySelector("#add");
// addButton.addEventListener('click', () => add(firstNum, secondNum));


// operator functions: clear, change pos/neg, square root, divide,
// multiply, subtract, add, equal
function add(a, b) {
    
    display.textContent = a + b;
}


