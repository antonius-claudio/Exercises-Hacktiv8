// Claudio Antonius

function tentukanDeretAritmatika(arr) {
    let temp = [];
    let condition;
    // loop buat nyari sama simpen selisih
    for (let i = 0; i < arr.length-1; i++) {
        temp[i] = (arr[i+1] - arr[i]);
    }
    // loop buat cek ada yang beda atau tidak
    for (let j = 0; j < temp.length-1; j++) {
        (temp[j] === temp[j+1]) ? condition = true : condition = false;        
    }
    return condition;
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false