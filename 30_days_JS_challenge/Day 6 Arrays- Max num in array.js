//- Day 6: Arrays - Write a function to find the max number in an array.


// function maxNumberInArray(arr) {
//     let max = arr[0];
//     for (let i =1 ; i < arr.length; i++) {
//         if (arr[i] > max)
//             max = arr[i]
//     }
//     return max
// }


const maxNumber = maxNumberInArray([34, 105, 2, 9, 100, 201, 76]);

console.log(maxNumber)

function maxNumberInArray(arr) {
    if (arr.length === 0) return null; // Handle empty array case
    arr.sort((a,b) => b - a); // Sort the array in descending order
    return arr[0];
}