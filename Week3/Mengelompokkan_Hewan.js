// Claudio Antonius

// function groupAnimals(animals) {
    
//     let hewan = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
//     for (let i = 0; i < animals.length; i++) {
//         if (animals[i][0] === 'a')
//             hewan[0].push(animals[i]);
//         else if (animals[i][0] === 'b')
//             hewan[1].push(animals[i]);
//         else if (animals[i][0] === 'c')
//             hewan[2].push(animals[i]);
//         else if (animals[i][0] === 'd')
//             hewan[3].push(animals[i]);
//         else if (animals[i][0] === 'e')
//             hewan[4].push(animals[i]);
//         else if (animals[i][0] === 'f')
//             hewan[5].push(animals[i]);
//         else if (animals[i][0] === 'g')
//             hewan[6].push(animals[i]);
//         else if (animals[i][0] === 'h')
//             hewan[7].push(animals[i]);
//         else if (animals[i][0] === 'i')
//             hewan[8].push(animals[i]);
//         else if (animals[i][0] === 'j')
//             hewan[9].push(animals[i]);
//         else if (animals[i][0] === 'k')
//             hewan[10].push(animals[i]);
//         else if (animals[i][0] === 'l')
//             hewan[11].push(animals[i]);
//         else if (animals[i][0] === 'm')
//             hewan[12].push(animals[i]);
//         else if (animals[i][0] === 'n')
//             hewan[13].push(animals[i]);
//         else if (animals[i][0] === 'o')
//             hewan[14].push(animals[i]);
//         else if (animals[i][0] === 'p')
//             hewan[15].push(animals[i]);
//         else if (animals[i][0] === 'q')
//             hewan[16].push(animals[i]);
//         else if (animals[i][0] === 'r')
//             hewan[17].push(animals[i]);
//         else if (animals[i][0] === 's')
//             hewan[18].push(animals[i]);
//         else if (animals[i][0] === 't')
//             hewan[19].push(animals[i]);
//         else if (animals[i][0] === 'u')
//             hewan[20].push(animals[i]);
//         else if (animals[i][0] === 'v')
//             hewan[21].push(animals[i]);
//         else if (animals[i][0] === 'w')
//             hewan[22].push(animals[i]);
//         else if (animals[i][0] === 'x')
//             hewan[23].push(animals[i]);
//         else if (animals[i][0] === 'y')
//             hewan[24].push(animals[i]);
//         else if (animals[i][0] === 'z')
//             hewan[25].push(animals[i]);

//     }
    
//     return hewan;
// }

function groupAnimals(animals) {
    let abjad = 'abcdefghijklmnopqrstuvwxyz';
    let result = [];
    for (let i = 0; i < abjad.length; i++) {
        let temp = [];
        for (let j = 0; j < animals.length; j++) {
            if (abjad[i] === animals[j][0]) {       
                // temp = animals[j];
                temp.push(animals[j]);
            }
        }
        if (temp.length !== 0)
            result.push(temp);
    }
    return result;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]