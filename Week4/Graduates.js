// Claudio Antonius

function graduates (students) {
    let obj = {};
    if (students.length !== 0) {
        // mencari kelas agar tidak double
        let arrClass = [];
        arrClass.push(students[0].class);
        for (let i = 1; i < students.length; i++) {
            let condition = true;
            for (let j = 0; j < arrClass.length; j++) {
                if (arrClass[j]===students[i].class)                
                    condition = false;
            }
            if (condition === true)
                arrClass.push(students[i].class);
        }
        // mencari perkelas
        for (let k = 0; k < arrClass.length; k++) {
            // mencari persiswa
            let arrStudentGrad = [];
            for (let l = 0; l < students.length; l++) {
                let objStudentGrad = {};
                if ((students[l].class === arrClass[k]) && (students[l].score >= 75)) {
                    objStudentGrad.name = students[l].name;
                    objStudentGrad.score = students[l].score;
                    arrStudentGrad.push(objStudentGrad);
                }
            }
            obj[arrClass[k]] = arrStudentGrad;
        }
    }
    return obj;
}

console.log(graduates([
{
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
},
{
    name: 'Alexei',
    score: 85,
    class: 'wolves'
},
{
    name: 'Sergei',
    score: 74,
    class: 'foxes'
},
{
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
}
]));

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([
{
    name: 'Alexander',
    score: 100,
    class: 'foxes'
},
{
    name: 'Alisa',
    score: 76,
    class: 'wolves'
},
{
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
},
{
    name: 'Albert',
    score: 71,
    class: 'wolves'
},
{
    name: 'Viktor',
    score: 80,
    class: 'tigers'
}
]));

// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }


console.log(graduates([])); //{}