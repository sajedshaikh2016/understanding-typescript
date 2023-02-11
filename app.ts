function combine(number1: number | string, number2: number | string, resultConversion: 'as-number' | 'as-text') {
    let result;
    if (typeof number1 === 'number' && typeof number2 === 'number' || resultConversion === 'as-number') {
        result = +number1 + +number2;
    } else {
        result = number1.toString() + number2.toString();
    }

    return result;

    // if (resultConversion === 'is-number') {
    //     return +result;
    // } else {
    //     return result.toString();
    // }
}

const combineAges = combine(30, 26, 'as-number');
console.log(combineAges);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);


const combineNames = combine('Sajed', 'Shaikh', 'as-text')
console.log(combineNames);
