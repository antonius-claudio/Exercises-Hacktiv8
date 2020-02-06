// Claudio Antonius

function digitPerkalianMinimum(angka) {
    // array menyimpan nilai-nilai perkalian
    let arr = [];
    // mencari angka yang dapat dibagi dan menyimpan angka2 pembaginya
    for (let i = 1; i <= angka; i++) {
        let x1 = 0;
        let x2 = 0;
        let temp = [];
        if (angka % i === 0){
            x1 = i;
            x2 = angka/i;
            temp.push(`${x1}${x2}`)
            arr.push(temp);
        }
    }
    // deklarasi untuk digit minimum
    let min = 999;
    // ketika dari array baru terdapat jumlah yang lebih kecil dari jumlah min, akan menggantikan jumlah min
    for (let j = 0; j < arr.length; j++) {
        // untuk mengecek jumlah length pada array anak, di ubah ke string karena untuk mengecek perhuruf
        if (String(arr[j]).length < min)
            min = String(arr[j]).length;
    }
    return min;

    // cara 2
    // let res = []
    // for (let i = 1; i <= angka; i++) {
    //     for (let j = 1; j <= angka; j++) {
    //         if (i * j === angka){
    //             res.push(`${i}${j}`)
    //         } 
    //     }
    // }
    // for (let i = 0; i < res.length; i++) {
    //     for (let j = i+1; j < res.length; j++) {
    //         if (res[i].length > res[j].length){
    //             let temp = res[i]
    //             res[i] = res[j]
    //             res[j] = temp
    //         }            
    //     }        
    // }
    // return res[0].length;

}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2