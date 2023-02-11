function addition(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result : ", num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printResult(addition(10, 15));
var combineValues;
combineValues = addition;
// combineValues = printResult;
// combineValues = 5;
console.log(combineValues(8, 2));
// let someValue: undefined;
addAndHandle(10, 22, function (result) {
    console.log(result);
});
