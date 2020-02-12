// claudio antonius

let obj = [
    {
        menu: 'mie',
        price: 5
    },
    {
        menu: 'nasi',
        price: 3
    },
    {
        menu: 'ikan',
        price: 1
    },
    {
        menu: 'ayam',
        price: 2
    },
    {
        menu: 'kodok',
        price: 4
    }

];
console.log(obj);
console.log('------------------');

function insertionsort(obj) {
    for (let i = 0; i < obj.length; i++) {
        let temp = obj[i];
        let j = i;
        while(j > 0 && temp.price < obj[j-1].price) {
            obj[j] = obj[j-1];
            j--;
        }
        obj[j] = temp;
    }
    console.log(obj);
}

insertionsort(obj);