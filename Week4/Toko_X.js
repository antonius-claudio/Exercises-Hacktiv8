// Claudio Antonius

function countProfit(shoppers) {
    let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                    ['Baju Zoro', 500000, 2],
                    ['Sweater Uniklooh', 175000, 1]
                    ];

// you can only write your code here!
    // cek inputan
    if (shoppers.length !== 0) {
        // object hasil
        let obj = {};
        // loop banyak list barang
        for (let i = 0; i < listBarang.length; i++) {
            // simpan nama pembeli
            let arrBuyers = [];
            // sisa
            let sisa = listBarang[i][2];
            // loop pembeli"
            for (let j = 0; j < shoppers.length; j++) {
                // jika sisa-jumlah yang ingin dibeli >= 0 dan nama barang === nama yang ingin dibeli
                if (sisa-shoppers[j].amount >= 0 && listBarang[i][0] === shoppers[j].product){
                    // cari sisa
                    sisa -= shoppers[j].amount;
                    // simpan nama
                    arrBuyers.push(shoppers[j].name);
                }            
            }
            // masukin ke object
            obj.product = listBarang[i][0];
            obj.shoppers = arrBuyers;
            obj.leftOver = sisa;
            obj.totalProfit = ((listBarang[i][2]-sisa)*listBarang[i][1]);
            // print object
            console.log(obj);
        }
        return '';
    } else {
        return shoppers;
    }
}

// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}
, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}
, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}
, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}
, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}
, {name: 'Devi', product: 'Baju Zoro', amount: 1}
, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]