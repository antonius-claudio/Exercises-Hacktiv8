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

function selectionsort(obj) {
    for (let i = 0; i < obj.length-1; i++) {
        let min = i;
        console.log(obj[i].price)
        console.log(`--------loop ${i+1}--------`);
        for (let j = i+1; j < obj.length; j++) {
            if (obj[min].price > obj[j].price) 
                min = j;
                console.log(`${i} - ${j}`)
                console.log(obj)
        }
        let temp = obj[min];
        obj[min] = obj[i];
        obj[i] = temp;        
    }
    console.log(obj);
}

selectionsort(obj);