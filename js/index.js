//number values
let storedNumber1 = null
let storedNumber2 = null
let storedNumber3 = null
let storednumber4 = null
let operator = null

//buttons and statements to execute when pressed
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
            //extra 4
        } else if (storednumber4 === null) {
            storednumber4 = Number(button.value)
            resultRef.textContent = Calculate(storedNumber1, storedNumber2, storedNumber3, storednumber4)
            console.log("You pressed: ", storedNumber1, storedNumber2, storedNumber3, storednumber4)
        }
        
        console.log(storedNumber1, storedNumber2, storedNumber3, storednumber4)
    })
})
//amount of number buttons
console.log("you have: ", numberButton.length, " number buttons")

function Calculate(num1, num2, num3 = 0, num4 = 0) {
    if (operator === "+") {
        return num1 + num2 + num3 + num4
    } else if (operator === "-") {
        return num1 - num2 - num3 - num4
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
    storednumber4 = null;
    operator = null;
    resultRef.textContent = "";
    console.log(storedNumber1, storedNumber2, storedNumber3, storednumber4)
})



