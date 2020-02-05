// Claudio Antonius

function changeMe(arr) {
    let now = 2020;
    let object = {};
    for (let i = 0; i < arr.length; i++) {
        object.firstName = arr[i][0];
        object.lastName = arr[i][1];
        object.gender = arr[i][2];
        if (arr[i][3] === '' || arr[i][3] === undefined || arr[i][3] > now) {
            object.age = 'Invalid Birth Year';
        } else 
            object.age = now-arr[i][3];
        console.log(i+1 +'. ' + arr[i][0] + ' ' + arr[i][1] + ':');
        console.log(object);
    }
    
    return "";
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""