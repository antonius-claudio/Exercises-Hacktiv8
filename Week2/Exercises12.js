// Konversi Menit - Claudio Antonius

function konversiMenit(menit) {
    let hour = 0;
    let minute = 0;
    
    hour = Math.floor(menit / 60);
    minute = menit % 60;
    (minute < 10) ? minute = '0' + minute : minute;
    return hour + ':' + minute;
}
  
// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00