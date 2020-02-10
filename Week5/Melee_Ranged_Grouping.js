// Claudio Antonius

function meleeRangedGrouping (str) {
    //your code here
    let result = [];
    if (str.length !== 0) {
        let arr = str.split(',');
        let ranged = [];
        let melee = [];
        for (let i = 0; i < arr.length; i++) {
            let temp = arr[i].split('-');
            if (temp[1] === 'Ranged')
                ranged.push(temp[0]);
            else 
                melee.push(temp[0]);
        }
        result.push(ranged);
        result.push(melee);
    }
    return result;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []