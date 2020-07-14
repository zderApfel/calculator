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
    firstValue: "0",
    operator: "",
    secondValue: "0",
    result: "0"
}

initialize();

function initialize(){ //Function creates buttons, and gives them their appropriate functions
    SCREEN.value = CALCULATION.firstValue;
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
            //Give button complete math function here
        }
        else if (symbolArray[i] == "."){
            //Add functionality for decimals here
        }
        else {
            button.addEventListener("click", function() {setOperator(button.id)});
        }
    }
    ERASE_BUTTON.addEventListener("click", function(){erase()});
}

function setNumber(number){
    if (SCREEN.value.length < 15 && SCREEN.value == "0"){
        SCREEN.value = number;
    }
    else if (CALCULATION.firstValue.length == 15){
        alert("ERROR: Possible overflow");
    }
    else if (SCREEN.value != "0"){
        SCREEN.value = SCREEN.value + number;
    }
}

function setOperator(symbol){
    CALCULATION.operator = symbol;
}

function doMath(first, operator, second){
    first = Number.parseInt(first);
    second = Number.parseInt(second);
    switch (operator){
        case "+":
            return first + second;
        case "-":
            return first - second;
        case "*":
            return first * second;
        case "÷":
            if (second == 0){
                return "ERROR";
            }
            else{
                return first / second;
            }
    }
}

function erase(){
    CALCULATION.firstValue = "0";
    CALCULATION.operator = "0";
    CALCULATION.secondValue = "0";
    CALCULATION.result = 0;
    SCREEN.value = CALCULATION.firstValue;
}