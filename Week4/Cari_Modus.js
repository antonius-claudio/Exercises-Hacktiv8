// Claudio Antonius

function cariModus(arr) {
    let newArr = [];
    newArr.push(arr[0]);
    // untuk mencari angka satuan / membuang double
    for (let i = 0; i < arr.length; i++) {
        let condition = true;
        for (let j = 0; j < newArr.length; j++) {
            if (arr[i] === newArr[j])
                condition = false;
        }
        if (condition === true)
            newArr.push(arr[i])
    }
    
    let result; // untuk simpan nilai yang terbanyak
    let countPrev = 0; // untuk temporari perhitungan terbanyak
    for (let k = 0; k < newArr.length; k++) {
        let count = 0; // untuk menyimpan perhitungan sekarang
        // looping mencari jumlah angka pada array baru
        for (let l = 0; l < arr.length; l++) {
            if (newArr[k] === arr[l])
                count+=1;            
        }
        // jika jumlah sekarang lebih besar, makan akan di simpan value dan banyaknya
        if (count > countPrev){
            result = newArr[k];
            countPrev = count;
        }
    }
    // jika countPrev === panjang array maka -1 (semua angka sama)
    // atau jika countPrev === 1 (tidak ada angka yang double)
    // selain itu balikin nilai result
    return (countPrev === arr.length || countPrev === 1) ? -1 : result;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
// contoh tambahan apabila terdapat kemungkinan 2 modus
console.log(cariModus([1, 2, 2, 3, 3, 4, 5])); // 2
console.log(cariModus([5, 10, 10, 6, 5, 10])); // 10