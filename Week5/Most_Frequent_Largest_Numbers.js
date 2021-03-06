// Claudio Antonius

function sorting(arrNumber) {
    // code di sini
    for (let i = 0; i < arrNumber.length-1; i++) {
        for (let j = 0; j < arrNumber.length-i-1; j++) {
            if (arrNumber[j] > arrNumber[j+1]) {
                let temp = arrNumber[j+1];
                arrNumber[j+1] = arrNumber[j];
                arrNumber[j] = temp;
            }
        }   
    }
    return arrNumber;
}

function getTotal(arrNumber) {
    // code di sini
    if (arrNumber.length !== 0){
        let count = 0;
        for (let i = 0; i < arrNumber.length; i++) {
            if(arrNumber[arrNumber.length-1]===arrNumber[i])
                count++;        
        }
        return `angka paling besar adalah ${arrNumber[arrNumber.length-1]} dan jumlah kemunculan sebanyak ${count} kali`; 
    } else
        return '';
}

// Latihan OBJECT
// function getHigh(arrNumber) {
//     let result = {};
//     for (let i = 0; i < arrNumber.length; i++) {
//         let stringArr = String(arrNumber[i]);
//         if (result[stringArr] == null)
//             result[stringArr] = 1;
//         else result[stringArr]++;
//     }
//     let temp = 0;
//     let highest = '';
//     for (var key in result) {
//         if (key > highest) {
//             temp = result[key];
//             highest = key;
//         }
//     }
//     if (arrNumber.length != 0)
//         return `angka paling besar adalah ${highest} dan jumlah kemunculan sebanyak ${temp} kali`;
//     else
//         return '';
// }

function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    // var countHighest = getHigh(arrNumber);
    return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''