function sum(...rest) {
    let sum = 0;
    for (let number of resr) sum += number;
    return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);

function sum2(initVal, ...rest) {
    let sum2 = 0;
    for (let number of rest) sum2 += number;
    return initVal + sum2;
}

let x2 = sum2(10, 5);