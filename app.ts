function addition(n1: number, n2: number): number {
    return n1 + n2;
}

function printResult(num: number): void {
    console.log("Result : ", num);
}

printResult(addition(10, 15));

let combineValues: (a: number, b: number) => number;

combineValues = addition;
// combineValues = printResult;
// combineValues = 5;

console.log(combineValues(8, 2));

// let someValue: undefined;