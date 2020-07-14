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
    else if (operation > 9999999){
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

initialize();

function initialize(){
    for (i=1; i <= 16; i++){
        let symbolArray = "789+456-123*.0=÷".split("");
        let button = document.createElement("div");
        BUTTON_AREA.appendChild(button);
        button.classList.add("button");
        button.id = `b${i}`;
        button.innerHTML = symbolArray[i-1];
    }
}