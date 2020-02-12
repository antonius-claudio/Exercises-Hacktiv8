/*
Array Remover
Array remover merupakan sebuah function yang berfungsi untuk menghapus value
dari sebuah array yang diberikan berdasarkan jumlah yang ingin dihapus dan index
mulai.
Array remover menerima tiga parameter yaitu array of number, index untuk mulai
menghapus dan jumlah data yang akan dihapus
Contoh:
Input:
  array: [ 666, 666, 333, 10, 5, 6]
  index: 1
  count: 2
Output:
  [ 666, 10, 5, 6 ]
RULES:
  - WAJIB MENYERTAKAN ALGORITMA / PSEUDOCODE
  - Dilarang menggunakan built-in function .map, .filter, .reduce!
*/

/* PSEUDOCODE
  FOR i=index, i<(index+count)
    array[i] = ''
    i++
  ENDFOR
  SET dump = []
  FOR j=0, j<array.length
    IF (array[j] !== '')
      DO dump.push(array[j])
    ENDIF
    j++
  ENDFOR
  DISPLAY dump
*/

function arrayRemover(array, index, count) {
  for (let i = index; i < (index+count); i++) {
    array[i] = '';
  }
  let dump = [];
  for (let j = 0; j < array.length; j++) {
    if (array[j] !== '')
      dump.push(array[j])
  }
  return dump;
}



console.log(arrayRemover([1, 2, 3], 0, 2)); // [3]
console.log(arrayRemover([666, 666, 333, 10, 5, 6], 1, 2)); // [ 666, 10, 5, 6 ]
console.log(arrayRemover([1, 2, 3], 0, 3)) // []