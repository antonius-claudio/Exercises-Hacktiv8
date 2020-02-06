// Claudio Antonius

function shoppingTime(memberId, money) {
    let object = {};
    object.memberId = memberId;
    object.money = money;
    let pengeluaran = 0;
    let sisa = money;
    let list = [];
    if (memberId === '' || memberId === undefined) {
        return 'Mohon maaf, toko X hanya berlaku untuk member saja';
    } else if (money < 50000) {
        return 'Mohon maaf, uang tidak cukup';
    }
    if (sisa >= 1500000) {
        list.push('Sepatu brand Stacattu');
        pengeluaran += 1500000;
    }
    if (sisa >= 500000) {
        list.push('Baju brand Zoro');
        pengeluaran += 500000;
    }
    if (sisa >= 250000) {
        list.push('Baju brand H&N');
        pengeluaran += 250000;
    }
    if (sisa >= 175000) {
        list.push('Sweater brand Uniklooh');
        pengeluaran += 175000;
    }
    if (sisa >= 50000) {
        list.push('Casing Handphone');
        pengeluaran += 50000;
    }
    sisa = money-pengeluaran;
    object.listPurchased = list;
    object.changeMoney = sisa;
    return object;
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja