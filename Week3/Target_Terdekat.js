// Claudio Antonius

function targetTerdekat(arr) {
    let test = [];
    let var1;
    let indexVar1;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== ' ') {
            var1 = arr[i];
            indexVar1 = i;
        }
    }
    return test
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2