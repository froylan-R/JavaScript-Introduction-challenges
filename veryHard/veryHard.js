var prompt1 = Number(prompt("add your first number"))
var operator = prompt("add a operator")
var prompt2 = Number(prompt("now add the last number"))


if (operator === "+") {
    add(prompt1, prompt2)
    console.log(`${prompt1}  +  ${prompt2}  =  ${add(prompt1, prompt2)}`)
}

else if (operator === "/") {
    divide(prompt1, prompt2)
    console.log(`${prompt1}  /  ${prompt2}  =  ${divide(prompt1, prompt2)}`)
} 

else if (operator === "-") {
    subtract(prompt1, prompt2)
    console.log(`${prompt1}  -  ${prompt2}  =  ${subtract(prompt1, prompt2)}`)
}

else if (operator === "*") {
    mulitply(prompt1, prompt2)
    console.log(`${prompt1}  *  ${prompt2}  =  ${mulitply(prompt1, prompt2)}`)
}

else {
    console.log('your doing something wrong buddy')
}


function add(number1, number2) {
    var adding = number1 + number2
    return adding
}

function subtract(number1, number2) {
    var subtracting = number1 - number2
    return subtracting
}

function divide(number1, number2) {
    var dividing = number1 / number2
    return dividing
}

function mulitply(number1, number2) {
    var multiplying = number1 * number2
    return multiplying
}

