/**
  Diberikan sebuah function countMe yang menerima sebuah parameter array of string.
  Function ini akan me-return object literal dimana isi dari object tersebut berisi
  jumlah karakter pada array of string
  Contoh:
  input: [ 'dimitri', 'awtian', 'icha' ]
  output:
    {
      d: 1,
      i: 5,
      m: 1,
      t: 2,
      r: 1,
      a: 3,
      w: 1,
      n: 1,
      c: 1,
      h: 1
    }
**/

function countMe(names) {
  let arr = [];
  arr.push(names[0][0]);
  for (let i = 0; i < names.length; i++) {
    let dump = 0;
    for (let j = 0; j < names[i].length; j++) {
      let condition = true;
      for (let k = 0; k < arr.length; k++) {
        if (arr[k] === names[i][j])
          condition = false;
      }
      if (condition === true)
        arr.push(names[i][j])
    }
  }
  let result = '';
  for (let l = 0; l < arr.length; l++) {
    let count = 0;
    for (let m = 0; m < names.length; m++) {
      for (let n = 0; n < names[m].length; n++) {
        if (arr[l] === names[m][n])
          count += 1;
      }      
    }
    if (l === (arr.length-1))
      result += `
    ${arr[l]}: ${count}
}`
    else if (l === 0)
      result += `
{
    ${arr[l]}: ${count}, `
    else
      result += `
    ${arr[l]}: ${count}, `
  }
  return result;
}

console.log(countMe([ 'dimitri', 'awtian', 'icha' ]));
//{
//   d: 1,
//   i: 5,
//   m: 1,
//   t: 2,
//   r: 1,
//   a: 3,
//   w: 1,
//   n: 1,
//   c: 1,
//   h: 1
// }

console.log(countMe([ 'dimas', 'ryan', 'akbar', 'tama']));
// {
//   d: 1,
//   i: 1.
//   m: 2,
//   a: 6,
//   s: 1,
//   r: 2,
//   y: 1,
//   n: 1,
//   k: 1,
//   b: 1,
//   t: 1
// }


// 35m09s64