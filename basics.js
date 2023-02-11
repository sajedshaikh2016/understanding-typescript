"use strict";
function add(n1, n2, showResult, phrase) {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
const number1 = 2;
const number2 = 3.5;
const printResult1 = true;
const resultPhrase = "Result is : ";
add(number1, number2, printResult1, resultPhrase);
