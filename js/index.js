/*
You should be able to click A) a button with a number, 
then the B) plus sign, then a C) button with a number
1. Create buttons in HTML with an ID (incl one with operator +)
2. Link these buttons in JS with their ascribed value. e.g. 1,2,3.
3. Have, when buttons are pressed store the value in a variable
4. Have button + add variable of number value plus + and then wait for the next number button
5. Display result of pressed buttons.

I need help with:
A) ascribe pressed button to a variable
B) Have plus button converted into an operator
C) Have storedNumberX plus with eachoter.
D) Have the result being abled to add extra when + is pressed and the button value
*/
let storedNumber1 = null
let storedNumber2 = null
let storedNumber3 = null
let operator = null

//buttons
const numberButton = document.querySelectorAll(".number-button");
const resultRef = document.querySelector("#result")
numberButton.forEach(function(button) {
    button.addEventListener("click", function() {
        if (storedNumber1 === null) {
            storedNumber1 = Number(button.value)
            resultRef.textContent = storedNumber1
            console.log("You pressed: ", storedNumber1)
        } else if (storedNumber2 === null) {
            storedNumber2 = Number(button.value)
            resultRef.textContent = Calculate(storedNumber1, storedNumber2)
            console.log("You pressed: ", storedNumber1 + storedNumber2)
        } else if (storedNumber3 === null) {
            storedNumber3 = Number(button.value)
            resultRef.textContent = Calculate(storedNumber1, storedNumber2, storedNumber3)
            console.log("You pressed: ", storedNumber1 + storedNumber2 + storedNumber3)
        } console.log(storedNumber1, storedNumber2, storedNumber3)
    })
})

function Calculate(num1, num2, num3 = 0) {
    if (operator === "+") {
        return num1 + num2 + num3
    } else if (operator === "-") {
        return num1 - num2 - num3
    }
}
const operatorButton = document.querySelector("#button-Plus")
operatorButton.addEventListener("click", function(event) {
    operator = event.target.value
});
//clear button
const clearButton = document.querySelector("#clear")
clearButton.addEventListener("click", function() {
    storedNumber1 = null;
    storedNumber2 = null;
    storedNumber3 = null;
    console.log(storedNumber1, storedNumber2, storedNumber3)
})


const buttonPlus = document.querySelector("#button-Plus")
buttonPlus.addEventListener("click", function() {
    console.log("You pressed: ", buttonPlus.value)
})


//result
const resultDisplay = document.querySelector("#result")
