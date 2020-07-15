/*
--CALCULATOR PROJECT--

This is it Zach. The final project of Web Development 101. You can do this! The calulator must do the following:

Goal: Be able to run all basic four functions of a calculator (addition, subtraction, multiplication, and division)

How it will be done:

- Declare an "object" (named Calculation) with three properties: 
    - First value
    - Operator
    - Second value
    - result
- Declare a screen variable that keeps changing as values and operators are added
-Take input from event listeners on the number keys and adds into the first value of the Calculation, put this value on the screen
-Take input from the event listenrs on the operator keys
-Take input from the number keys and adds it into the second value, put this value on the screen as well

if (equals sign is pressed){
    if (division sign is operator && second value == 0){
        display MATH ERROR on screen
        break;
    }
    else if (result of operation length is longer than 15...){
        display OVERFLOW ERROR
        break;
    }
    display the result on screen and put it in the Calculation object
}
else if (operator sign is pressed){
    replace the first value with the result value
    clear second value
    await second value
    continue until broken
}


Erase button erases all stored values and starts fresh
*/

const SCREEN = document.getElementById("screen");
const BUTTON_AREA = document.getElementById("button-grid");
const ERASE_BUTTON = document.getElementById("erase-button");
const CALCULATION = {
    firstValue: null,
    operator: null,
    secondValue: null,
}

initialize();

function initialize(){ //Function creates buttons, and gives them their appropriate functions
    SCREEN.value = "0";
    let symbolArray = "789+456-123*.0=÷".split("");
    for (i=0; i < symbolArray.length; i++){
        let button = document.createElement("div");
        BUTTON_AREA.appendChild(button);
        button.classList.add("button");
        button.id = symbolArray[i];
        button.innerHTML = symbolArray[i];
        if (parseInt(symbolArray[i]) || symbolArray[i] == "0"){
            button.addEventListener("click", function() {setNumber(button.id)});
        }
        else if (symbolArray[i] == "="){
            button.addEventListener("click", function() {calculate(CALCULATION.operator)});
        }
        else if (symbolArray[i] == "."){
            button.addEventListener("click", function() {decimal()});
        }
        else {
            button.addEventListener("click", function() {setOperator(button.id)});
        }
    }
    ERASE_BUTTON.addEventListener("click", function(){erase()});
}

function setNumber(number){
    if (SCREEN.value == "0"){
        SCREEN.value = number;
    }
    else if (SCREEN.value != "0" && CALCULATION.firstValue != null){
        SCREEN.value = number;
    }
    else if (SCREEN.value != "0"){
        SCREEN.value = SCREEN.value + number;
    }
    if (CALCULATION.operator != null){

    }
}

function decimal(){
    if (SCREEN.value.includes(".") == false){
        SCREEN.value = SCREEN.value + ".";
    }
}

function setOperator(symbol){
    if (CALCULATION.secondValue == null && CALCULATION.operator == null){
        CALCULATION.operator = symbol;
        CALCULATION.firstValue = SCREEN.value;
    }
}

function calculate(operator){
    CALCULATION.secondValue = SCREEN.value;
    if (CALCULATION.firstValue == null || CALCULATION.secondValue == null){
        return;
    }
    let first = Number.parseInt(CALCULATION.firstValue);
    let second = Number.parseInt(CALCULATION.secondValue);
    let result = 0;
    switch (operator){
        case "+":
            result = first + second;
            break;
        case "-":
            result = first - second;
            break;
        case "*":
            result = first * second;
            break;
        case "÷":
            if (second == 0){
                result = "ERROR";
            }
            else{
                result = first / second;
            }
            break;
    }
    SCREEN.value = result;
}

function erase(){
    CALCULATION.firstValue = null;
    CALCULATION.operator = null;
    CALCULATION.secondValue = null;
    SCREEN.value = "0";
}