//Write a function that doubles every second integer in a list, starting from the left.

function doubleEveryOther(a) {
    let result = [];
    for (let i = 0; i < a.length; i++) {
        if (i % 2 !== 0) {
            const doubling = a[i] * 2;
            result.push(doubling);
        } else {
            result.push(a[i]);
        }
    }
    console.log(result);
}
doubleEveryOther([1, 2, 3, 4]);
//The result is [1,4,3,8]
