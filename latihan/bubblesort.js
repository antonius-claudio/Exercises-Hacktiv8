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

function bubblesort(obj) {
    for (let i = 0; i < obj.length-1; i++) {
        console.log(`--------loop ${i+1}--------`);
        for (let j = 0; j < obj.length-i-1; j++) {
            if (obj[j].price > obj[j+1].price) {
                let temp = obj[j+1];
                obj[j+1] = obj[j];
                obj[j] = temp;
            }
            console.log(`${i} - ${j}`)
            console.log(obj);
        }
    }
}

bubblesort(obj);
// console.log(obj);