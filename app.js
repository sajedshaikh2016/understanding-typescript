function addition(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result : ", num);
}
printResult(addition(10, 15));
var combineValues;
combineValues = addition;
// combineValues = printResult;
// combineValues = 5;
console.log(combineValues(8, 2));
// let someValue: undefined;
