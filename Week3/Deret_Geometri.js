// Claudio Antonius

function tentukanDeretGeometri(arr) {
    let temp = [];
    let condition;
    for (let i = 0; i < arr.length-1; i++) {
        temp[i] = arr[i+1]/arr[i];
    }
    for (let j = 0; j < temp.length-1; j++) {
        (temp[j] === temp[j+1]) ? condition = true : condition = false;        
    }
    return condition;
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false