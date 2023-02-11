function addition(n1: number, n2: number): number {
    return n1 + n2;
}

function printResult(num: number): void {
    console.log("Result : ", num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

printResult(addition(10, 15));

let combineValues: (a: number, b: number) => number;

combineValues = addition;
// combineValues = printResult;
// combineValues = 5;

console.log(combineValues(8, 2));

// let someValue: undefined;

addAndHandle(10, 22, (result) => {
    console.log(result);
});