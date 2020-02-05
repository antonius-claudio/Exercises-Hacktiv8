// Claudio Antonius

function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    let newArr = [];
    for (let i = 0; i < arrPenumpang.length; i++) {
        let obj = {};
        let awal;
        let akhir;
        for (let j = 0; j < rute.length; j++) {
            if (arrPenumpang[i][1] === rute[j])
                awal = j;
            else if (arrPenumpang[i][2] === rute[j])
                akhir = j;
        }
        obj.penumpang = arrPenumpang[i][0];
        obj.naikDari = arrPenumpang[i][1];
        obj.tujuan = arrPenumpang[i][2];
        obj.bayar = (akhir-awal)*2000;
        newArr.push(obj);
    }
    return newArr;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]