// Claudio Antonius

function targetTerdekat(arr) {
    let count = 999;
    // let balik = []
    for (let i = 0; i < arr.length-1; i++) {
        if (arr[i] !== ' '){
            for (let j = i+1; j < arr.length; j++) {
                if (arr[j] !== ' '){
                    if ((arr[i] === 'x' && arr[j] === 'o') || (arr[i] === 'o' && arr[j] === 'x')){
                        // balik.push(`${arr[i]} -> ${arr[j]}`)

                        let temp = j-i;
                        if (temp < count){
                            count = temp;
                        }
                    }
                }
            }
        }
    }
    if (count === 999)
        count = 0;
    return count
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2