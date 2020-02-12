/**
 * 
 * 
 # Slice and dice!
## Objectives
- Mampu membuat function serupa built in function sederhana JavaScript
- Mampu menggabungkan konsep `looping/iteration` dan `conditional` didalam sebuah masalah
- Mampu mengakses sebuah array
## Directions
Diberikan sebuah function bernama slice dimana function tersebut menerima tiga paramter.
- Parameter pertama bernama `data` bertipe array
- Parameter kedua bernama `start` bertipe number (optional)
- Parameter ketiga bernama `end` bertipe number (optional)
 Function akan mengembalikan nilai array yang telah dipotong/slice sesuai dengan value dari paramter `start` dan `end`
 Array yang di return merupakan potongan array `mulai dari start hingga sebelum end`
 ***ASUMSI:***
 - variabel `start` bisa tidak diisi (berarti end-nya juga kosong). Jika hal ini terjadi maka pemotongan data array dimulai dari index ke 0
 - jika value variabel `start` lebih besar dibandingkan jumlah data array, maka function akan mengembalikan array kosong
 * 
 * 
 * Rules :
 * - Dilarang menggunakan built-in function .slice .split .splice etc
 */
/* Claudio Antonius

  BEGIN slice
    READ and SET data
    READ and SET start
    READ and SET end

    IF start === undefined
      DO SET start = 0
    ENDIF
    IF end === undefined
      DO SET end = data.length
    ENDIF
    SET result = []

    FOR i = start; i < end
      SAVE data[i] TO result
    i++
    ENDFOR
    DISPLAY result
  END
*/
function slice(data, start, end) {
  // Write your code here
  if (start === undefined)
    start = 0;
  if (end === undefined)
    end = data.length;

  let result = [];
  for (let i = start; i < end; i++) {
    result.push(data[i]);
  }
  return result;
}
// function slice(data, start=0, end=data.length) {
//   // Write your code here
//   let result = [];
//   for (let i = start; i < end; i++) {
//     result.push(data[i]);
//   }
//   return result;
// }



//DRIVER CODE
console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 2)); // [ 'camel', 'duck', 'elephant' ]
console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 2, 4)); // [ 'camel', 'duck' ]
console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 1, 5)); // [ 'bison', 'camel', 'duck', 'elephant' ]
console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'])); //[ 'ant', 'bison', 'camel', 'duck', 'elephant' ]
console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 20)); //[]