// Claudio Antonius

function highestScore (students) {
    if (students.length === 0) {
        return students;
    } else {
        // cari nama class tanpa double
        let arrClass = [];
        arrClass.push(students[0].class);
        for (let i = 1; i < students.length; i++) {
            let condition = true;
            for (let j = 0; j < arrClass.length; j++) {
                if (students[i].class === arrClass [j])
                    condition = false
            }
            if (condition === true) {
                arrClass.push(students[i].class);             
            }
        }
        let objResult = {};
        //mencari nilai tertinggi
        for (let k = 0; k < arrClass.length; k++) {
            let objClassResult = {};
            let tempScore = 0;
            let tempName;
            for (let l = 0; l < students.length; l++) {
                if (arrClass[k] === students[l].class){
                    if (students[l].score > tempScore){
                        tempScore = students[l].score;
                        tempName = students[l].name;
                    }
                }
            }
            objClassResult.name = tempName;
            objClassResult.score = tempScore;
            console.log(arrClass[k])
            objResult.test = objClassResult; // gak bisa simpen obj dalam obj
            console.log(objResult);
        }
        return "";
        // return objResult;
    }
}

// TEST CASE
console.log(highestScore([
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
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
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
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}