// Claudio Antonius

function groupAnimals(animals) {
    // cek berapa banyak perbedaan untuk looping

    let hewan = [[]];
    for (let i = 0; i < animals.length; i++) {
        if (animals[i][0] === 'a')
            hewan.push(push(animals[i]));
    }
    return hewan;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]